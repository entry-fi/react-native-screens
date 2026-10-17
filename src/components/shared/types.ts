export type BlurEffect =
  | 'none'
  | 'extraLight'
  | 'light'
  | 'dark'
  | 'regular'
  | 'prominent'
  | 'systemUltraThinMaterial'
  | 'systemThinMaterial'
  | 'systemMaterial'
  | 'systemThickMaterial'
  | 'systemChromeMaterial'
  | 'systemUltraThinMaterialLight'
  | 'systemThinMaterialLight'
  | 'systemMaterialLight'
  | 'systemThickMaterialLight'
  | 'systemChromeMaterialLight'
  | 'systemUltraThinMaterialDark'
  | 'systemThinMaterialDark'
  | 'systemMaterialDark'
  | 'systemThickMaterialDark'
  | 'systemChromeMaterialDark';

export type ColorScheme = 'light' | 'dark';

export type Direction = 'ltr' | 'rtl';

export type InterfaceOrientation =
  | 'all'
  | 'allButUpsideDown'
  | 'portrait'
  | 'portraitUp'
  | 'portraitDown'
  | 'landscape'
  | 'landscapeLeft'
  | 'landscapeRight';

export type ScrollEdgeEffect = 'automatic' | 'hard' | 'soft' | 'hidden';

export type UserInterfaceStyle = 'unspecified' | 'light' | 'dark';

// Entry fork: the Stack v5 iOS header (taken from main) imports PlatformIconIOS from here; 4.30.0 keeps it in src/types.
export type { PlatformIconIOS } from '../../types';
