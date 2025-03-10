//
//  FrameProcessorUtils.m
//  VisionCamera
//
//  Created by Marc Rousavy on 15.03.21.
//  Copyright © 2021 mrousavy. All rights reserved.
//

#import "FrameProcessorUtils.h"
#import <chrono>
#import <memory>

#import "FrameHostObject.h"
#import "Frame.h"

#import <React/RCTBridge.h>
#import <React/RCTBridge+Private.h>
#import "JSConsoleHelper.h"
#import <ReactCommon/RCTTurboModule.h>

FrameProcessorCallback convertJSIFunctionToFrameProcessorCallback(jsi::Runtime &runtime, const jsi::Function &value) {
  __block auto cb = value.getFunction(runtime);

  return ^(Frame* frame) {

    auto frameHostObject = std::make_shared<FrameHostObject>(frame);
    try {
      cb.call(runtime, jsi::Object::createFromHostObject(runtime, frameHostObject));
    } catch (jsi::JSError& jsError) {
      auto message = jsError.getMessage();
      RCTBridge* bridge = [RCTBridge currentBridge];
      if (bridge != nil) {
        bridge.jsCallInvoker->invokeAsync([bridge, message]() {
          auto logFn = [JSConsoleHelper getLogFunctionForBridge:bridge];
          logFn(RCTLogLevelError, [NSString stringWithFormat:@"Frame Processor threw an error: %s", message.c_str()]);
        });
      } else {
        NSLog(@"Frame Processor threw an error: %s", message.c_str());
      }
    }

    // Manually free the buffer because:
    //  1. we are sure we don't need it anymore, the frame processor worklet has finished executing.
    //  2. we don't know when the JS runtime garbage collects this object, it might be holding it for a few more frames
    //     which then blocks the camera queue from pushing new frames (memory limit)
    frameHostObject->close();
  };
}
