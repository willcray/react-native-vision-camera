//
//  QRCodeFrameProcessorPluginObjC.m
//  VisionCameraExample
//
//  Created by Marc Rousavy on 01.05.21.
//

#import <Foundation/Foundation.h>
#import <VisionCamera/FrameProcessorPlugin.h>

// Example for an Objective-C Frame Processor plugin

@interface QRCodeFrameProcessorPluginObjC : NSObject
@end

@implementation QRCodeFrameProcessorPluginObjC

+ (MLKFaceDetectorOptions*)options {
  static MLKFaceDetectorOptions* options;
  if (options == nil) {
    options = [[MLKFaceDetectorOptions alloc] init];
    options.performanceMode = MLKFaceDetectorPerformanceModeAccurate;
    options.landmarkMode = MLKFaceDetectorLandmarkModeAll;
    options.classificationMode = MLKFaceDetectorClassificationModeAll;
  }
  return options;
}

static inline id exampleObjC___scanQRCodes(CMSampleBufferRef buffer, NSArray* arguments) {
  // TODO: Use some AI to detect QR codes in the CMSampleBufferRef
  return @[];
}

VISION_EXPORT_FRAME_PROCESSOR(exampleObjC___scanQRCodes)

@end
