module.exports = {
  dependency: {
    platforms: {
      android: {
        componentDescriptors: [
          "RNSFullWindowOverlayComponentDescriptor",
          "RNSScreenContainerComponentDescriptor",
          "RNSScreenNavigationContainerComponentDescriptor",
          "RNSScreenStackHeaderConfigComponentDescriptor",
          "RNSScreenStackHeaderSubviewComponentDescriptor",
          "RNSScreenStackComponentDescriptor",
          "RNSSearchBarComponentDescriptor",
          'RNSScreenComponentDescriptor',
          "RNSScreenFooterComponentDescriptor",
          "RNSScreenContentWrapperComponentDescriptor",
          'RNSModalScreenComponentDescriptor',
          'RNSTabsHostComponentDescriptor',
          'RNSSafeAreaViewComponentDescriptor',
          'RNSStackScreenComponentDescriptor',
          'RNSHeaderConfigComponentDescriptor',
          'RNSStackHeaderSubviewComponentDescriptor',
          'RNSFormSheetHostComponentDescriptor'
        ],
        cmakeListsPath: "../android/src/main/jni/CMakeLists.txt"
      },
    },
  },
};
