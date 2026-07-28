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
    "items": [
      {
        "id": "3096293097",
        "name": "🎨Improve Daily Tasks Claim Feedback",
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
      },
      {
        "id": "3116072287",
        "name": "🎨FTUE Tunnel Identity Step (1 --> 2)  | 🎓",
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
            "id": "3116117315",
            "name": "Tunnel Progress – Name Selection Intro",
            "parent_item": {
              "id": "3116072287",
              "name": "🎨FTUE Tunnel Identity Step (1 --> 2)  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:43+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:17:58+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-27T10:46:57+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-27T10:47:02+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-27T10:47:04+00:00",
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
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120000495",
                "name": "UI design",
                "parent_item": {
                  "id": "3116117315",
                  "name": "Tunnel Progress – Name Selection Intro"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko, Asaf Bashari"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T08:07:21+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T08:05:46+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "How Many Coffees Do I need? ☕",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "How Many Coffees Do I need? ☕"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T08:06:00+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "User Needs",
                    "updated_at": "2026-07-28T08:06:02+00:00",
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "User Needs"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Minimum",
                    "updated_at": "2026-07-28T08:06:04+00:00",
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
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3116186557",
            "name": "Player Name Selection Modalicon",
            "parent_item": {
              "id": "3116072287",
              "name": "🎨FTUE Tunnel Identity Step (1 --> 2)  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:43+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:17:58+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-27T10:46:57+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-27T10:47:02+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-27T10:47:04+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3116177429",
            "name": "Tunnel Play Button Guidance",
            "parent_item": {
              "id": "3116072287",
              "name": "🎨FTUE Tunnel Identity Step (1 --> 2)  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:43+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:17:58+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-27T10:46:57+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-27T10:47:02+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-27T10:47:04+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120000495",
            "name": "UI design",
            "parent_item": {
              "id": "3116117315",
              "name": "Tunnel Progress – Name Selection Intro"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko, Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:07:21+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T08:05:46+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T08:06:00+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-28T08:06:02+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-28T08:06:04+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3116088824",
        "name": "🎨FTUE Part 2  | 🎓",
        "column_values": [
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": "Asaf Bashari, Katerina sayko"
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
            "id": "3116145747",
            "name": "Objective Screen",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko, Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T22:32:22+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T22:32:26+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T22:32:27+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T22:32:29+00:00",
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
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120254086",
                "name": "UI",
                "parent_item": {
                  "id": "3116145747",
                  "name": "Objective Screen"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:07:23+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T09:07:20+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "No Effort",
                    "updated_at": "2026-07-28T09:07:26+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "No Effort"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:07:28+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3116105040",
            "name": "Guided Order Completion Tutorial",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3116081959",
            "name": "Highlight Order Progress",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko, Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120269299",
                "name": "UI",
                "parent_item": {
                  "id": "3116081959",
                  "name": "Highlight Order Progress"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:09:07+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T09:09:08+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "xS",
                    "updated_at": "2026-07-28T09:09:10+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "xS"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:11:52+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3116081875",
            "name": "Continue Guided Order Tutorial",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3116061501",
            "name": "Force Order Sale",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3116116680",
            "name": "Guided Multi-Order Tutorial",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3116147291",
            "name": "Prevent Over-Merging During FTUE",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko, Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120287527",
                "name": "UI",
                "parent_item": {
                  "id": "3116147291",
                  "name": "Prevent Over-Merging During FTUE"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:11:44+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T09:11:42+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "xS",
                    "updated_at": "2026-07-28T09:11:45+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "xS"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:11:54+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3116176326",
            "name": "Level 2 Completion Screen",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko, Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120297720",
                "name": "UI",
                "parent_item": {
                  "id": "3116176326",
                  "name": "Level 2 Completion Screen"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:13:29+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T09:13:28+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "No Effort",
                    "updated_at": "2026-07-28T09:13:21+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "No Effort"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:13:23+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3116176726",
            "name": "Booster Unlock Screen",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko, Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-26T23:07:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-26T23:07:38+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-26T23:07:40+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-26T23:07:42+00:00",
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
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120291842",
                "name": "UI",
                "parent_item": {
                  "id": "3116176726",
                  "name": "Booster Unlock Screen"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:18:06+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T09:13:57+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "xS",
                    "updated_at": "2026-07-28T09:14:00+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "xS"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:13:58+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3117479785",
            "name": "Complete MVP FTUE Flow",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko, Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-27T10:29:49+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-27T10:29:52+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-27T10:29:56+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-27T10:29:59+00:00",
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
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120300685",
                "name": "UI",
                "parent_item": {
                  "id": "3117479785",
                  "name": "Complete MVP FTUE Flow"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:20:08+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T09:20:10+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "M",
                    "updated_at": "2026-07-28T09:20:11+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "M"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:20:15+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              },
              {
                "id": "3120280432",
                "name": "UI Tunnel Design",
                "parent_item": {
                  "id": "3117479785",
                  "name": "Complete MVP FTUE Flow"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:14:51+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-07-28T09:14:50+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "S",
                    "updated_at": "2026-07-28T09:19:22+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "S"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:14:53+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3117530151",
            "name": "Open Welcome Gift",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Asaf Bashari"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T08:05:35+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-07-27T10:29:51+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "How Many Coffees Do I need? ☕",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "How Many Coffees Do I need? ☕"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-27T10:29:54+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "User Needs",
                "updated_at": "2026-07-27T10:29:57+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "User Needs"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-07-27T10:30:00+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120286512",
            "name": "UI Full Flow",
            "parent_item": {
              "id": "3116088824",
              "name": "🎨FTUE Part 2  | 🎓"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:10:06+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:10:07+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:10:23+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:13:32+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120254086",
            "name": "UI",
            "parent_item": {
              "id": "3116145747",
              "name": "Objective Screen"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:07:23+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:07:20+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-07-28T09:07:26+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:07:28+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120269299",
            "name": "UI",
            "parent_item": {
              "id": "3116081959",
              "name": "Highlight Order Progress"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:09:07+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:09:08+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:09:10+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:11:52+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120287527",
            "name": "UI",
            "parent_item": {
              "id": "3116147291",
              "name": "Prevent Over-Merging During FTUE"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:11:44+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:11:42+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:11:45+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:11:54+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120297720",
            "name": "UI",
            "parent_item": {
              "id": "3116176326",
              "name": "Level 2 Completion Screen"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:13:29+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:13:28+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-07-28T09:13:21+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:13:23+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120291842",
            "name": "UI",
            "parent_item": {
              "id": "3116176726",
              "name": "Booster Unlock Screen"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:18:06+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:13:57+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:14:00+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:13:58+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120295435",
            "name": "BG Design",
            "parent_item": {
              "id": "3120280432",
              "name": "UI Tunnel Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Not Defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Not Defined"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Task",
                "updated_at": "2026-07-28T09:15:20+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:19:15+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:15:42+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120299867",
            "name": "עיצוב של כל השלב בכמה מצבים",
            "parent_item": {
              "id": "3120280432",
              "name": "UI Tunnel Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Not Defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Not Defined"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Task",
                "updated_at": "2026-07-28T09:15:40+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:19:14+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:15:44+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120300685",
            "name": "UI",
            "parent_item": {
              "id": "3117479785",
              "name": "Complete MVP FTUE Flow"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:20:08+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:20:10+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "M",
                "updated_at": "2026-07-28T09:20:11+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "M"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:20:15+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120325136",
                "name": "Kaider Design 1",
                "parent_item": {
                  "id": "3120300685",
                  "name": "UI"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:21:15+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Task",
                    "updated_at": "2026-07-28T09:19:06+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Task"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "xS",
                    "updated_at": "2026-07-28T09:18:31+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "xS"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:18:32+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              },
              {
                "id": "3120314175",
                "name": "Kaider Design 2 + BTN",
                "parent_item": {
                  "id": "3120300685",
                  "name": "UI"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Ready for Design",
                    "updated_at": "2026-07-28T09:21:17+00:00",
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Ready for Design"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Task",
                    "updated_at": "2026-07-28T09:19:07+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Task"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "xS",
                    "updated_at": "2026-07-28T09:18:28+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "xS"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:18:34+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          },
          {
            "id": "3120325136",
            "name": "Kaider Design 1",
            "parent_item": {
              "id": "3120300685",
              "name": "UI"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:21:15+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Task",
                "updated_at": "2026-07-28T09:19:06+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:18:31+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:18:32+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120314175",
            "name": "Kaider Design 2 + BTN",
            "parent_item": {
              "id": "3120300685",
              "name": "UI"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:21:17+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Task",
                "updated_at": "2026-07-28T09:19:07+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-07-28T09:18:28+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:18:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3120280432",
            "name": "UI Tunnel Design",
            "parent_item": {
              "id": "3117479785",
              "name": "Complete MVP FTUE Flow"
            },
            "column_values": [
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
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
                "id": "color_mm5fb7mm",
                "label": "Ready for Design",
                "updated_at": "2026-07-28T09:14:51+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-07-28T09:14:50+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-07-28T09:19:22+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Onboarding",
                "updated_at": "2026-07-28T09:14:53+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Onboarding"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Why Though? 🤨",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Why Though? 🤨"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Not set",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Not set"
              },
              {
                "column": {
                  "id": "rating_mm5m33pq",
                  "title": "Product Value"
                },
                "text": ""
              }
            ],
            "subitems": [
              {
                "id": "3120295435",
                "name": "BG Design",
                "parent_item": {
                  "id": "3120280432",
                  "name": "UI Tunnel Design"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Not Defined",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Not Defined"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Task",
                    "updated_at": "2026-07-28T09:15:20+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Task"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "xS",
                    "updated_at": "2026-07-28T09:19:15+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "xS"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:15:42+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              },
              {
                "id": "3120299867",
                "name": "עיצוב של כל השלב בכמה מצבים",
                "parent_item": {
                  "id": "3120280432",
                  "name": "UI Tunnel Design"
                },
                "column_values": [
                  {
                    "column": {
                      "id": "person",
                      "title": "Assigned"
                    },
                    "text": "Katerina sayko"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
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
                    "id": "color_mm5fb7mm",
                    "label": "Not Defined",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Not Defined"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Task",
                    "updated_at": "2026-07-28T09:15:40+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Task"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "xS",
                    "updated_at": "2026-07-28T09:19:14+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "xS"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Onboarding",
                    "updated_at": "2026-07-28T09:15:44+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Onboarding"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Why Though? 🤨",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Why Though? 🤨"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Not set",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k7m7a",
                      "title": "Sprint Goal"
                    },
                    "text": "Not set"
                  },
                  {
                    "column": {
                      "id": "rating_mm5m33pq",
                      "title": "Product Value"
                    },
                    "text": ""
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "3117510155",
        "name": "Implement Modular Lobby Onboarding | 🎓",
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
        "id": "3117534415",
        "name": "Booster Charge Animation - MVP",
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
      }
    ]
  }
}





  return res;
}
