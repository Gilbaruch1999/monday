/* cspell:disable */
/* eslint-disable */
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
                id: "3323184903",
              },
              {
                id: "3339374630",
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
            "label": "Work In Progress",
            "updated_at": "2026-11-17T10:36:21+00:00",
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Work In Progress"
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
                "label": "Done",
                "updated_at": "2026-11-23T09:02:23+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
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
                "text": "Katerina sayko"
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
                "label": "Done",
                "updated_at": "2026-11-19T14:01:33+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
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
                "text": "Katerina sayko"
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
                "label": "Done",
                "updated_at": "2026-11-24T09:02:14+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
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
                "text": "Katerina sayko"
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
                "label": "Done",
                "updated_at": "2026-11-24T09:02:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
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
                "text": "Katerina sayko"
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
                "label": "Done",
                "updated_at": "2026-11-24T09:02:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
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
                "text": "Katerina sayko"
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
                "label": "Done",
                "updated_at": "2026-11-24T15:20:59+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
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
                "text": "Katerina sayko"
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
                "label": "Done",
                "updated_at": "2026-11-24T15:30:55+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
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
                "text": "Katerina sayko"
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
                "label": "Work In Progress",
                "updated_at": "2026-11-24T09:02:18+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Work In Progress"
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
                "text": "Katerina sayko"
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
                "text": "Katerina sayko"
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
                "text": "Katerina sayko"
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
                "text": "Katerina sayko"
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
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3291921464",
        "name": "🎨Lucky Orders Mechanic - Design",
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
            "updated_at": "2026-11-08T15:00:37+00:00",
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Pending"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-10-18T20:53:36+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "M",
            "updated_at": "2026-10-19T10:36:01+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "M"
          },
          {
            "id": "color_mm5fj7av",
            "label": "Brainstorm Match",
            "updated_at": "2026-10-18T20:53:28+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "Brainstorm Match"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Game Content",
            "updated_at": "2026-10-18T20:53:31+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Game Content"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Outstanding",
            "updated_at": "2026-10-18T20:53:07+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Outstanding"
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
            "id": "3293248597",
            "name": "icon for Trophy progression",
            "parent_item": {
              "id": "3291921464",
              "name": "🎨Lucky Orders Mechanic - Design"
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
                "updated_at": "2026-10-28T09:05:17+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-10-19T10:29:06+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-10-28T09:05:19+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-10-28T09:05:21+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Outstanding",
                "updated_at": "2026-10-28T09:05:24+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Outstanding"
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
            "id": "3293256059",
            "name": "Capibara in gold",
            "parent_item": {
              "id": "3291921464",
              "name": "🎨Lucky Orders Mechanic - Design"
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
                "updated_at": "2026-10-28T09:05:17+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-10-19T10:34:23+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-10-28T09:05:19+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-10-28T09:05:21+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Outstanding",
                "updated_at": "2026-10-28T09:05:24+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Outstanding"
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
            "id": "3293258640",
            "name": "Lacky orders received popup",
            "parent_item": {
              "id": "3291921464",
              "name": "🎨Lucky Orders Mechanic - Design"
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
                "updated_at": "2026-10-28T09:05:17+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-10-19T10:33:06+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-10-28T09:05:19+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-10-28T09:05:21+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Outstanding",
                "updated_at": "2026-10-28T09:05:24+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Outstanding"
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
            "id": "3293268121",
            "name": "+2 icon",
            "parent_item": {
              "id": "3291921464",
              "name": "🎨Lucky Orders Mechanic - Design"
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
                "updated_at": "2026-10-28T09:05:17+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-10-19T10:35:56+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-10-28T09:05:19+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-10-28T09:05:21+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Outstanding",
                "updated_at": "2026-10-28T09:05:24+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Outstanding"
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
            "id": "3293274110",
            "name": "gold frame design",
            "parent_item": {
              "id": "3291921464",
              "name": "🎨Lucky Orders Mechanic - Design"
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
                "updated_at": "2026-10-28T09:05:17+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-10-19T10:35:35+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-10-28T09:05:19+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-10-28T09:05:21+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Outstanding",
                "updated_at": "2026-10-28T09:05:24+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Outstanding"
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
        "id": "3361670687",
        "name": "🎨Match Victory & End Screen Improvements",
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
            "updated_at": "2026-11-16T14:02:22+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "S",
            "updated_at": "2026-11-19T09:03:17+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "S"
          },
          {
            "id": "color_mm5fj7av",
            "label": "Brainstorm Match",
            "updated_at": "2026-11-16T14:02:25+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "Brainstorm Match"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Vision",
            "updated_at": "2026-11-16T14:03:14+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Vision"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Target",
            "updated_at": "2026-11-16T14:03:17+00:00",
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
            "id": "3383183944",
            "name": "Match Victory & End Screen Improvements",
            "parent_item": {
              "id": "3361670687",
              "name": "🎨Match Victory & End Screen Improvements"
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
                "updated_at": "2026-11-24T15:33:00+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-24T15:33:04+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-11-24T15:33:08+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-24T15:33:11+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Target",
                "updated_at": "2026-11-24T15:33:14+00:00",
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
                "text": ""
              }
            ],
            "subitems": []
          }
        ]
      }
    ]
  }
}

  return res;
}
