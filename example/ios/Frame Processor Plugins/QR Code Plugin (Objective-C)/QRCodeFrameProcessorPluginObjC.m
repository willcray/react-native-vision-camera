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

static inline id exampleObjC___scanQRCodes(CMSampleBufferRef buffer, NSArray* arguments) {
  MLKVisionImage *image = [[MLKVisionImage alloc] initWithBuffer:buffer];
  image.orientation = UIImageOrientationRightMirrored;
  NSArray<MLKFace*>* faces = [[QRCodeFrameProcessorPluginObjC faceDetector] resultsInImage:image error:nil];
  
  NSMutableArray* results = [[NSMutableArray alloc] initWithCapacity:faces.count];
  for (MLKFace* face in faces) {
    [results addObject:@{
      @"x": @(face.frame.origin.x),
      @"y": @(face.frame.origin.y),
      @"height": @(face.frame.size.height),
      @"width": @(face.frame.size.width),
    }];
  }
  
  return results;
}

VISION_EXPORT_FRAME_PROCESSOR(exampleObjC___scanQRCodes)

@end
