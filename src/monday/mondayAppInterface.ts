// src/types/monday.ts

export interface BaseMondayContext {
  instanceId: number;
  instanceType: string;
  theme: 'light' | 'dark' | 'black';
  account: {
    id: string;
  };
  user: {
    id: string;
    isAdmin: boolean;
    isGuest: boolean;
    isViewOnly: boolean;
    countryCode: string;
    currentLanguage: string;
    timeFormat: string;
    timeZoneUniqueKey: string;
  };
  app?: {
    id: number;
    version: {
      major: number;
      minor: number;
      patch: number;
      type: string;
    };
  };
}

// Specific feature contexts
export interface BoardViewContext extends BaseMondayContext {
  boardId: number;
  boardViewId: number;
}

export interface ItemViewContext extends BaseMondayContext {
  boardId: number;
  itemId: number;
}

export interface DashboardWidgetContext extends BaseMondayContext {
  boardIds: number[];
  widgetId: number;
}

export type MondayContext =
  | BoardViewContext
  | ItemViewContext
  | DashboardWidgetContext;

  export interface MondayUser
  {
   id : string
   name : string
   email : string
   is_admin :boolean
   photo_tiny : boolean
  }
