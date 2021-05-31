//
//  QRCodeFrameProcessorPluginObjC.m
//  VisionCameraExample
//
//  Created by Marc Rousavy on 01.05.21.
//

#import <Foundation/Foundation.h>
#import <VisionCamera/FrameProcessorPlugin.h>
#import <MLKitVision/MLKitVision.h>
#import <MLKitFaceDetection/MLKitFaceDetection.h>
#import <AVFoundation/AVCaptureDevice.h>

// Example for an Objective-C Frame Processor plugin

@interface QRCodeFrameProcessorPluginObjC : NSObject
@end

@implementation QRCodeFrameProcessorPluginObjC

+ (MLKFaceDetector*)faceDetector {
  static MLKFaceDetector* faceDetector;
  if (faceDetector == nil) {
    MLKFaceDetectorOptions* options = [[MLKFaceDetectorOptions alloc] init];
    options.landmarkMode = MLKFaceDetectorLandmarkModeAll;
    options.classificationMode = MLKFaceDetectorClassificationModeAll;
    faceDetector = [MLKFaceDetector faceDetectorWithOptions:options];
  }
  return faceDetector;
}

+ (UIImageOrientation)
imageOrientationFromDeviceOrientation:(UIDeviceOrientation)deviceOrientation
cameraPosition:(AVCaptureDevicePosition)cameraPosition {
  switch (deviceOrientation) {
    case UIDeviceOrientationPortrait:
      return cameraPosition == AVCaptureDevicePositionFront ? UIImageOrientationLeftMirrored
      : UIImageOrientationRight;
      
    case UIDeviceOrientationLandscapeLeft:
      return cameraPosition == AVCaptureDevicePositionFront ? UIImageOrientationDownMirrored
      : UIImageOrientationUp;
    case UIDeviceOrientationPortraitUpsideDown:
      return cameraPosition == AVCaptureDevicePositionFront ? UIImageOrientationRightMirrored
      : UIImageOrientationLeft;
    case UIDeviceOrientationLandscapeRight:
      return cameraPosition == AVCaptureDevicePositionFront ? UIImageOrientationUpMirrored
      : UIImageOrientationDown;
    case UIDeviceOrientationUnknown:
    case UIDeviceOrientationFaceUp:
    case UIDeviceOrientationFaceDown:
      return UIImageOrientationUp;
  }
}

static inline id exampleObjC___scanQRCodes(CMSampleBufferRef buffer, NSArray* arguments) {
  MLKVisionImage *image = [[MLKVisionImage alloc] initWithBuffer:buffer];
  image.orientation = [QRCodeFrameProcessorPluginObjC imageOrientationFromDeviceOrientation:UIDevice.currentDevice.orientation
                                                   cameraPosition:AVCaptureDevicePositionFront];
  NSArray<MLKFace*>* faces = [[QRCodeFrameProcessorPluginObjC faceDetector] resultsInImage:image error:nil];
  
  CVImageBufferRef imageBuffer = CMSampleBufferGetImageBuffer(buffer);
  size_t imageWidth = CVPixelBufferGetWidth(imageBuffer);
  size_t imageHeight = CVPixelBufferGetHeight(imageBuffer);
  
  NSMutableArray* results = [[NSMutableArray alloc] initWithCapacity:faces.count];
  for (MLKFace* face in faces) {
    [results addObject:@{
      @"x": @(face.frame.origin.x / imageWidth),
      @"y": @(face.frame.origin.y / imageHeight),
      @"height": @(face.frame.size.height / imageHeight),
      @"width": @(face.frame.size.width / imageWidth),
    }];
  }
  
  return results;
}

VISION_EXPORT_FRAME_PROCESSOR(exampleObjC___scanQRCodes)

@end
