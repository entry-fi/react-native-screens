#pragma once

#import <Foundation/Foundation.h>

@class RNSScrollViewMarkerComponentView;

@protocol RNSScrollViewSeeking <NSObject>

/**
 *  Call this method to register a ScrollView wrapped by marker with an interested component (receiver).
 */
- (void)registerDescendantScrollView:(nonnull UIScrollView *)scrollView
                          fromMarker:(nonnull RNSScrollViewMarkerComponentView *)marker;

@optional

/**
 *  [entry.fi patch] Called by the marker that registered with the receiver when it leaves the window,
 *  so the receiver can drop the scroll view it handed to UIKit. Optional: the tab screen does not
 *  implement it (its cache is weak). See RNSScreenView (RNSScreen.mm).
 */
- (void)unregisterDescendantScrollViewFromMarker:(nonnull RNSScrollViewMarkerComponentView *)marker;

@end
