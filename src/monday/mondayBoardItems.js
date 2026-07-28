/* cspell:disable */
import { createDateFromLocalText } from "../utils/utils";

export function getMondayDummyContext() {
  const res = {
    themeConfig: null,
    theme: "light",
    account: { id: "24603989" },
    user: {
      id: "72821851",
      isAdmin: true,
      isGuest: false,
      isViewOnly: false,
      countryCode: "IL",
      currentLanguage: "en",
      timeFormat: "12H",
      timeZoneOffset: 3,
    },
    region: "euc1",
    productKind: "10093110",
    app: { id: 10467866, clientId: "e2cb1e6edb7864a2d824f59dfd0685f4" },
    appVersion: {
      id: 10943131,
      name: "vue test",
      status: "live",
      type: "minor",
      versionData: {
        major: 1,
        minor: 9,
        patch: 0,
        number: 10,
        type: "minor",
        displayNumber: "v10",
      },
    },
    //boardId: 5048014529,
    //boardIds: [5048014529],
    boardId: 1647137427,
    boardIds: [1647137427],
    boardViewId: 32801439,
    viewMode: "fullScreen",
    instanceId: 32801439,
    instanceType: "board_view",
    workspaceId: 2460329,
    appFeature: { type: "AppFeatureBoardView", name: "Vue board view" },
    permissions: {
      approvedScopes: [
        "me:read",
        "boards:read",
        "docs:read",
        "workspaces:read",
        "users:read",
        "account:read",
        "updates:read",
        "assets:read",
        "tags:read",
        "teams:read",
        "webhooks:read",
      ],
      requiredScopes: [
        "me:read",
        "boards:read",
        "docs:read",
        "workspaces:read",
        "users:read",
        "account:read",
        "updates:read",
        "assets:read",
        "tags:read",
        "teams:read",
        "webhooks:read",
      ],
    },
  };
  return res;
}

export function getMondayDummyBoardItems() {
  const res = {

  "data": {
    "boards": [
      {
        "name": "Spark journey board",
        "items_page": {
          "items": [
            {
              "name": "🎨FTUE Tunnel Identity Step (1 --> 2)  | 🎓",
              "id": "3116072287",
              "column_values": [
                {
                  "column": {
                    "id": "person",
                    "title": "Assigned"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mm5k4f4",
                    "title": "Status"
                  },
                  "text": "Pending"
                },
                {
                  "column": {
                    "id": "subtasks_mkrmtgvm",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "color_mm5fb7mm",
                    "title": "Planning Status"
                  },
                  "text": "Ready for Design"
                },
                {
                  "column": {
                    "id": "color_mm5fx8bd",
                    "title": "Issue Type"
                  },
                  "text": "Feature"
                },
                {
                  "column": {
                    "id": "color_mm5fnp1x",
                    "title": "Size Estimation"
                  },
                  "text": "How Many Coffees Do I need? ☕"
                },
                {
                  "column": {
                    "id": "color_mm5fj7av",
                    "title": "Domain"
                  },
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "id": "color_mm5fqavz",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mm5k7m7a",
                    "title": "Sprint Goal"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "rating_mm5m33pq",
                    "title": "Product Value"
                  },
                  "text": "5"
                }
              ],
              "subitems": [
                {
                  "name": "Tunnel Progress – Name Selection Intro",
                  "id": "3116117315",
                  "parent_item": {
                    "id": "3116072287"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:17:58+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-27T10:46:57+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-27T10:47:02+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-27T10:47:04+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Player Name Selection Modal",
                  "id": "3116186557",
                  "parent_item": {
                    "id": "3116072287"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:17:58+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-27T10:46:57+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-27T10:47:02+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-27T10:47:04+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Tunnel Play Button Guidance",
                  "id": "3116177429",
                  "parent_item": {
                    "id": "3116072287"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:17:58+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-27T10:46:57+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-27T10:47:02+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-27T10:47:04+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨FTUE Part 2  | 🎓",
              "id": "3116088824",
              "column_values": [
                {
                  "column": {
                    "id": "person",
                    "title": "Assigned"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mm5k4f4",
                    "title": "Status"
                  },
                  "text": "Pending"
                },
                {
                  "column": {
                    "id": "subtasks_mkrmtgvm",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "color_mm5fb7mm",
                    "title": "Planning Status"
                  },
                  "text": "Ready for Design"
                },
                {
                  "column": {
                    "id": "color_mm5fx8bd",
                    "title": "Issue Type"
                  },
                  "text": "Feature"
                },
                {
                  "column": {
                    "id": "color_mm5fnp1x",
                    "title": "Size Estimation"
                  },
                  "text": "How Many Coffees Do I need? ☕"
                },
                {
                  "column": {
                    "id": "color_mm5fj7av",
                    "title": "Domain"
                  },
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "id": "color_mm5fqavz",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mm5k7m7a",
                    "title": "Sprint Goal"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "rating_mm5m33pq",
                    "title": "Product Value"
                  },
                  "text": "5"
                }
              ],
              "subitems": [
                {
                  "name": "Objective Screen",
                  "id": "3116145747",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T22:32:22+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T22:32:26+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T22:32:27+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T22:32:29+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Guided Order Completion Tutorial",
                  "id": "3116105040",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Highlight Order Progress",
                  "id": "3116081959",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Continue Guided Order Tutorial",
                  "id": "3116081875",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Force Order Sale",
                  "id": "3116061501",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Guided Multi-Order Tutorial",
                  "id": "3116116680",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Prevent Over-Merging During FTUE",
                  "id": "3116147291",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Level 2 Completion Screen",
                  "id": "3116176326",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Booster Unlock Screen",
                  "id": "3116176726",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-26T23:07:37+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-26T23:07:38+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-26T23:07:40+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-26T23:07:42+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Complete MVP FTUE Flow",
                  "id": "3117479785",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-27T10:29:49+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-27T10:29:52+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-27T10:29:56+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-27T10:29:59+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Open Welcome Gift",
                  "id": "3117530151",
                  "parent_item": {
                    "id": "3116088824"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Epic",
                      "updated_at": "2026-07-27T10:29:51+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Epic"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Onboarding",
                      "updated_at": "2026-07-27T10:29:54+00:00",
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Onboarding"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "User Needs",
                      "updated_at": "2026-07-27T10:29:57+00:00",
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "User Needs"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Minimum",
                      "updated_at": "2026-07-27T10:30:00+00:00",
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Minimum"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "test story 1",
                  "id": "3117642530",
                  "parent_item": {
                    "id": "3117530151"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Story",
                      "updated_at": "2026-07-27T13:15:38+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Story"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "xS",
                      "updated_at": "2026-07-27T12:05:08+00:00",
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "xS"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Where We At? 🕵️‍♂️",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Where We At? 🕵️‍♂️"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "Why Though? 🤨",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "Why Though? 🤨"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Not set",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Not set"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "test task 1",
                  "id": "3117678405",
                  "parent_item": {
                    "id": "3117642530"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Done",
                      "updated_at": "2026-07-28T01:25:48+00:00",
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Task",
                      "updated_at": "2026-07-27T13:15:41+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Task"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "M",
                      "updated_at": "2026-07-27T12:04:10+00:00",
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "M"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Where We At? 🕵️‍♂️",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Where We At? 🕵️‍♂️"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "Why Though? 🤨",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "Why Though? 🤨"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Not set",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Not set"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "test task 2",
                  "id": "3117833375",
                  "parent_item": {
                    "id": "3117642530"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Task",
                      "updated_at": "2026-07-27T13:15:44+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Task"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "S",
                      "updated_at": "2026-07-27T12:04:32+00:00",
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "S"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Where We At? 🕵️‍♂️",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Where We At? 🕵️‍♂️"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "Why Though? 🤨",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "Why Though? 🤨"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Not set",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Not set"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "test story 2",
                  "id": "3117829519",
                  "parent_item": {
                    "id": "3117530151"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "person",
                        "title": "Assigned",
                        "type": "people"
                      },
                      "text": ""
                    },
                    {
                      "id": "color_mm5k4f4",
                      "label": "Pending",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k4f4",
                        "title": "Status",
                        "type": "status"
                      },
                      "text": "Pending"
                    },
                    {
                      "column": {
                        "id": "subtasks_mkrmtgvm",
                        "title": "Subitems",
                        "type": "subtasks"
                      },
                      "text": null
                    },
                    {
                      "id": "color_mm5fb7mm",
                      "label": "Not Defined",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fb7mm",
                        "title": "Planning Status",
                        "type": "status"
                      },
                      "text": "Not Defined"
                    },
                    {
                      "id": "color_mm5fx8bd",
                      "label": "Story",
                      "updated_at": "2026-07-27T13:15:47+00:00",
                      "column": {
                        "id": "color_mm5fx8bd",
                        "title": "Issue Type",
                        "type": "status"
                      },
                      "text": "Story"
                    },
                    {
                      "id": "color_mm5fnp1x",
                      "label": "S",
                      "updated_at": "2026-07-27T12:04:55+00:00",
                      "column": {
                        "id": "color_mm5fnp1x",
                        "title": "Size Estimation",
                        "type": "status"
                      },
                      "text": "S"
                    },
                    {
                      "id": "color_mm5fj7av",
                      "label": "Where We At? 🕵️‍♂️",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fj7av",
                        "title": "Domain",
                        "type": "status"
                      },
                      "text": "Where We At? 🕵️‍♂️"
                    },
                    {
                      "id": "color_mm5fqavz",
                      "label": "Why Though? 🤨",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5fqavz",
                        "title": "Strategic Category",
                        "type": "status"
                      },
                      "text": "Why Though? 🤨"
                    },
                    {
                      "id": "color_mm5k7m7a",
                      "label": "Not set",
                      "updated_at": null,
                      "column": {
                        "id": "color_mm5k7m7a",
                        "title": "Sprint Goal",
                        "type": "status"
                      },
                      "text": "Not set"
                    },
                    {
                      "column": {
                        "id": "rating_mm5m33pq",
                        "title": "Product Value",
                        "type": "rating"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Implement Modular Lobby Onboarding | 🎓",
              "id": "3117510155",
              "column_values": [
                {
                  "column": {
                    "id": "person",
                    "title": "Assigned"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mm5k4f4",
                    "title": "Status"
                  },
                  "text": "Pending"
                },
                {
                  "column": {
                    "id": "subtasks_mkrmtgvm",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "color_mm5fb7mm",
                    "title": "Planning Status"
                  },
                  "text": "Ready for Planning"
                },
                {
                  "column": {
                    "id": "color_mm5fx8bd",
                    "title": "Issue Type"
                  },
                  "text": "Feature"
                },
                {
                  "column": {
                    "id": "color_mm5fnp1x",
                    "title": "Size Estimation"
                  },
                  "text": "How Many Coffees Do I need? ☕"
                },
                {
                  "column": {
                    "id": "color_mm5fj7av",
                    "title": "Domain"
                  },
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "id": "color_mm5fqavz",
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "id": "color_mm5k7m7a",
                    "title": "Sprint Goal"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "rating_mm5m33pq",
                    "title": "Product Value"
                  },
                  "text": "4"
                }
              ],
              "subitems": []
            },
            {
              "name": "Booster Charge Animation - MVP",
              "id": "3117534415",
              "column_values": [
                {
                  "column": {
                    "id": "person",
                    "title": "Assigned"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mm5k4f4",
                    "title": "Status"
                  },
                  "text": "Pending"
                },
                {
                  "column": {
                    "id": "subtasks_mkrmtgvm",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "color_mm5fb7mm",
                    "title": "Planning Status"
                  },
                  "text": "Ready for Planning"
                },
                {
                  "column": {
                    "id": "color_mm5fx8bd",
                    "title": "Issue Type"
                  },
                  "text": "Feature"
                },
                {
                  "column": {
                    "id": "color_mm5fnp1x",
                    "title": "Size Estimation"
                  },
                  "text": "How Many Coffees Do I need? ☕"
                },
                {
                  "column": {
                    "id": "color_mm5fj7av",
                    "title": "Domain"
                  },
                  "text": "Brainstorm Match"
                },
                {
                  "column": {
                    "id": "color_mm5fqavz",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mm5k7m7a",
                    "title": "Sprint Goal"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "rating_mm5m33pq",
                    "title": "Product Value"
                  },
                  "text": "3"
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Improve Daily Tasks Claim Feedback",
              "id": "3096293097",
              "column_values": [
                {
                  "column": {
                    "id": "person",
                    "title": "Assigned"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mm5k4f4",
                    "title": "Status"
                  },
                  "text": "Pending"
                },
                {
                  "column": {
                    "id": "subtasks_mkrmtgvm",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "color_mm5fb7mm",
                    "title": "Planning Status"
                  },
                  "text": "Ready for Design"
                },
                {
                  "column": {
                    "id": "color_mm5fx8bd",
                    "title": "Issue Type"
                  },
                  "text": "Feature"
                },
                {
                  "column": {
                    "id": "color_mm5fnp1x",
                    "title": "Size Estimation"
                  },
                  "text": "How Many Coffees Do I need? ☕"
                },
                {
                  "column": {
                    "id": "color_mm5fj7av",
                    "title": "Domain"
                  },
                  "text": "Lobby"
                },
                {
                  "column": {
                    "id": "color_mm5fqavz",
                    "title": "Strategic Category"
                  },
                  "text": "Cosmetics"
                },
                {
                  "column": {
                    "id": "color_mm5k7m7a",
                    "title": "Sprint Goal"
                  },
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "id": "rating_mm5m33pq",
                    "title": "Product Value"
                  },
                  "text": "1"
                }
              ],
              "subitems": []
            }
          ]
        }
      }
    ]
  }
}



  return res;
}
