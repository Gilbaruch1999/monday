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


export function getDummyIdsList() {
  const res = {
    data: {
      boards: [
        {
          items_page: {

            items: [
              {
                id: "3324023536",
              },
              {
                id: "3339374630",
              },
              {
                id: "3323184903",
              },
              {
                id: "3332405718",
              },
              {
                id: "3291809622",
              },

            ],
          },
        },
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
        "id": "3291809622",
        "name": "🎨Weekly Goals - Design",
        "column_values": [
          {
            "column": {
              "id": "subtasks_mkrmtgvm",
              "title": "Subitems"
            },
            "text": null
          },
          {
            "id": "color_mm5fb7mm",
            "label": "Pending",
            "updated_at": null,
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Pending"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-10-18T17:37:52+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "L",
            "updated_at": "2026-11-04T14:49:21+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "L"
          },
          {
            "id": "color_mm5fj7av",
            "label": "Lobby",
            "updated_at": "2026-10-18T17:37:56+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "Lobby"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Vision",
            "updated_at": "2026-10-18T17:38:02+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Vision"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Target",
            "updated_at": "2026-11-02T09:22:43+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Target"
          },
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": [
          {
            "id": "3330600140",
            "name": "Weekly Goals icon for lobby",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Work In Progress"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:16+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:42:36+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330605399",
            "name": "Popup weekly goals",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:18+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:42:49+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330814084",
            "name": "Match icon for: Play 25 Matches, Win 15 Matches Win 5 Matches in a Row, Win 5 Matches Using the Freeze Card Win a Match by at Least 30 Points",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:20+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-11-04T14:41:46+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330797449",
            "name": "Spend 30 Minutes in Matches - time icon",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:23+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-11-04T14:43:36+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330817027",
            "name": "icon for: Merge 500 Items, Pull 2,000 Items",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-11-04T14:44:55+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330811470",
            "name": "flower icon - Create 250 Flowers",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-11-04T14:45:22+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330813668",
            "name": "Complete 125 Orders",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-11-04T14:45:28+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330809226",
            "name": "trophy icon for Earn 120 Trophies",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-11-04T14:45:54+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330813781",
            "name": "booster icon - Use Booster 25 Times",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-11-04T14:46:16+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330824664",
            "name": "Energy icon for Earn 2,000 Energy Points, Earn 100 Energy Points in a Single Match",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-11-04T14:47:07+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330825837",
            "name": "coin icon for Spend 500 Coins",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-11-04T14:48:30+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3330829302",
            "name": "zz icon for Upgrade Something in the Zen Zone Twice",
            "parent_item": {
              "id": "3291809622",
              "name": "🎨Weekly Goals - Design"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:37+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-11-04T14:48:49+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3323184903",
        "name": "🎨Zen Zone World design improvements & Island Progression",
        "column_values": [
          {
            "column": {
              "id": "subtasks_mkrmtgvm",
              "title": "Subitems"
            },
            "text": null
          },
          {
            "id": "color_mm5fb7mm",
            "label": "Work In Progress",
            "updated_at": "2026-11-09T12:28:01+00:00",
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Work In Progress"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-11-01T20:33:27+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "xL",
            "updated_at": "2026-11-04T13:31:04+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "xL"
          },
          {
            "id": "color_mm5fj7av",
            "label": "Zen Zone",
            "updated_at": "2026-11-01T20:33:29+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "Zen Zone"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Vision",
            "updated_at": "2026-11-01T20:33:30+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Vision"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Minimum",
            "updated_at": "2026-11-02T09:22:41+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Minimum"
          },
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": [
          {
            "id": "3329642189",
            "name": "ZenZone Background new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": "2026-11-10T09:26:36+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:50:47+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329647397",
            "name": "Island state Locked",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-11-04T08:53:10+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329645898",
            "name": "Island 1 — DreamBloom environment",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T09:26:32+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:58:51+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329656331",
            "name": "Island 2 — Ginko environment",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-11T13:00:06+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:58:55+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329653976",
            "name": "Island 3 - autumn-inspired environment",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-12T13:15:11+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:58:57+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329663751",
            "name": "bridges between islands",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:59:40+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3330575413",
            "name": "Island 1 new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T08:59:03+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:04+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:31:32+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3330575750",
            "name": "Island 2 new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T08:59:05+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:07+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:31:50+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3330556853",
            "name": "Island 3 new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T08:59:07+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:09+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:31:51+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3324023536",
        "name": "לבדוק עם אסף משימה מקצועית ראשונה לרוברט להוסיף לכאן",
        "column_values": [
          {
            "column": {
              "id": "subtasks_mkrmtgvm",
              "title": "Subitems"
            },
            "text": null
          },
          {
            "id": "color_mm5fb7mm",
            "label": "Pending",
            "updated_at": null,
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Pending"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-11-04T07:22:34+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "No Effort",
            "updated_at": "2026-11-04T07:22:14+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "No Effort"
          },
          {
            "id": "color_mm5fj7av",
            "label": "General",
            "updated_at": "2026-11-04T07:22:39+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "General"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Disruption",
            "updated_at": "2026-11-04T07:22:44+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Disruption"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Minimum",
            "updated_at": "2026-11-08T10:51:09+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Minimum"
          },
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": ""
          }
        ],
        "subitems": [
          {
            "id": "3332393800",
            "name": "Zen Zone - Add island upgrade effect",
            "parent_item": {
              "id": "3324023536",
              "name": "לבדוק עם אסף משימה מקצועית ראשונה לרוברט להוסיף לכאן"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Not yet defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Not yet defined"
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
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3332398431",
            "name": "Zen Zone - Add island completion effect (fireworks)",
            "parent_item": {
              "id": "3324023536",
              "name": "לבדוק עם אסף משימה מקצועית ראשונה לרוברט להוסיף לכאן"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Not yet defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Not yet defined"
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
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3332401381",
            "name": "Daily Tasks - Steam collection polish",
            "parent_item": {
              "id": "3324023536",
              "name": "לבדוק עם אסף משימה מקצועית ראשונה לרוברט להוסיף לכאן"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Not yet defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Not yet defined"
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
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3332411157",
            "name": "Zen Zone - Limit the scroll area to the size of the island list",
            "parent_item": {
              "id": "3324023536",
              "name": "לבדוק עם אסף משימה מקצועית ראשונה לרוברט להוסיף לכאן"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Not yet defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Not yet defined"
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
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          },
          {
            "id": "3332412311",
            "name": "Win Streak Feature",
            "parent_item": {
              "id": "3324023536",
              "name": "לבדוק עם אסף משימה מקצועית ראשונה לרוברט להוסיף לכאן"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Not yet defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Not yet defined"
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
                "label": "Where We At? 🕵️‍♂️",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Where We At? 🕵️‍♂️"
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
                  "id": "person",
                  "title": "Assigned"
                },
                "text": ""
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3332405718",
        "name": "Facebook campaign by end of first week",
        "column_values": [
          {
            "column": {
              "id": "subtasks_mkrmtgvm",
              "title": "Subitems"
            },
            "text": null
          },
          {
            "id": "color_mm5fb7mm",
            "label": "Pending",
            "updated_at": null,
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Pending"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-11-05T09:12:00+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "No Effort",
            "updated_at": "2026-11-05T09:11:57+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "No Effort"
          },
          {
            "id": "color_mm5fj7av",
            "label": "General",
            "updated_at": "2026-11-05T09:12:03+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "General"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Monetization\\Data",
            "updated_at": "2026-11-05T09:12:16+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Monetization\\Data"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Minimum",
            "updated_at": "2026-11-05T09:12:19+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Minimum"
          },
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": "Dan Bouzaglo"
          }
        ],
        "subitems": []
      },
      {
        "id": "3339374630",
        "name": "finish bomb mechanics design",
        "column_values": [
          {
            "column": {
              "id": "subtasks_mkrmtgvm",
              "title": "Subitems"
            },
            "text": null
          },
          {
            "id": "color_mm5fb7mm",
            "label": "Done",
            "updated_at": "2026-11-09T12:27:57+00:00",
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Done"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-11-08T09:02:21+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "xS",
            "updated_at": "2026-11-08T09:02:19+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "xS"
          },
          {
            "id": "color_mm5fj7av",
            "label": "Brainstorm Match",
            "updated_at": "2026-11-08T09:03:20+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "Brainstorm Match"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Game Content",
            "updated_at": "2026-11-08T09:03:23+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Game Content"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Minimum",
            "updated_at": "2026-11-08T09:03:45+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Minimum"
          },
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": []
      }
    ]
  }
}

  return res;
}
