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

export function getDummyIdsList()
{
   const res = {

  "data": {
    "boards": [
      {
        "items_page": {
          "items": [
            {
              "id": "3116072287"
            },
            {
              "id": "3116088824"
            },
            {
              "id": "3117510155"
            },
            {
              "id": "3117534415"
            },
            {
              "id": "3096293097"
            }
          ]
        }
      }
    ]
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
        "name": "🎨Improve Daily Tasks Claim Feedback - Only UI",
        "column_values": [
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
            "text": "Pending"
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
            "text": "S"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko, Asaf Bashari"
          }
        ],
        "subitems": [
          {
            "id": "3123124052",
            "name": "UI",
            "parent_item": {
              "id": "3096293097",
              "name": "🎨Improve Daily Tasks Claim Feedback - Only UI"
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
                "updated_at": "2026-09-14T08:31:29+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-06T15:27:06+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-08T10:17:18+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-07-29T08:08:55+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Cosmetics",
                "updated_at": "2026-07-29T08:08:59+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Cosmetics"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Outstanding",
                "updated_at": "2026-07-29T08:09:02+00:00",
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
        "id": "3208302220",
        "name": "🎨 Tournaments - Only UI",
        "column_values": [
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
            "text": "Pending"
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
            "text": "L"
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
            "text": "Game Content"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": [
          {
            "id": "3208394085",
            "name": "🎨Tournament Lobby Entry icon",
            "parent_item": {
              "id": "3208302220",
              "name": "🎨 Tournaments - Only UI"
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
                "updated_at": "2026-09-14T08:31:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-06T14:22:45+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-08T10:14:32+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-06T14:22:51+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
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
            "id": "3208403299",
            "name": "🎨 Tournament Entry Popup",
            "parent_item": {
              "id": "3208302220",
              "name": "🎨 Tournaments - Only UI"
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
                "updated_at": "2026-09-14T08:31:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-06T14:22:45+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-08T10:14:39+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-06T14:22:51+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
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
            "id": "3208397846",
            "name": "🎨 Tournament Bracket & Progress",
            "parent_item": {
              "id": "3208302220",
              "name": "🎨 Tournaments - Only UI"
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
                "updated_at": "2026-09-14T08:31:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-06T14:22:45+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "M",
                "updated_at": "2026-09-08T10:16:25+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "M"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-06T14:22:51+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
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
            "id": "3208409326",
            "name": "🎨Tournament Winner & Reward Opening",
            "parent_item": {
              "id": "3208302220",
              "name": "🎨 Tournaments - Only UI"
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
                "updated_at": "2026-09-14T08:31:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-06T14:22:45+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-08T10:16:03+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-06T14:22:51+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
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
        "id": "3208379529",
        "name": "🎨Deja Vu Booster - Only UI",
        "column_values": [
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
            "text": "Work In Progress"
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
            "text": "L"
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
            "text": "Game Content"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": [
          {
            "id": "3208372821",
            "name": "🎨Gold Rush Activation Animation",
            "parent_item": {
              "id": "3208379529",
              "name": "🎨Deja Vu Booster - Only UI"
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
                "updated_at": "2026-09-14T08:43:37+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-09T08:15:46+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "M",
                "updated_at": "2026-09-08T10:13:47+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "M"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-17T07:31:20+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-17T07:31:19+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-17T07:31:17+00:00",
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
            "id": "3208375793",
            "name": "🎨Item Duplication Animation",
            "parent_item": {
              "id": "3208379529",
              "name": "🎨Deja Vu Booster - Only UI"
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
                "updated_at": "2026-09-14T08:43:37+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-09T08:15:49+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-08T10:13:25+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-17T07:31:20+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-17T07:31:19+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-17T07:31:17+00:00",
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
            "id": "3208376053",
            "name": "🎨Gold Rush Ending Animation",
            "parent_item": {
              "id": "3208379529",
              "name": "🎨Deja Vu Booster - Only UI"
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
                "updated_at": "2026-09-14T08:43:37+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-09T08:15:50+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-08T10:13:42+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-17T07:31:20+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-17T07:31:19+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-17T07:31:17+00:00",
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
        "id": "3221363215",
        "name": "Trophy Progression Screen - Dev",
        "column_values": [
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
            "text": "Pending"
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
            "text": "M"
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
            "text": "Vision"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": "Asaf Bashari"
          }
        ],
        "subitems": [
          {
            "id": "3229501429",
            "name": "Build progression ui page",
            "parent_item": {
              "id": "3221363215",
              "name": "Trophy Progression Screen - Dev"
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
                "label": "Task",
                "updated_at": "2026-09-17T07:23:10+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "M",
                "updated_at": "2026-09-17T06:58:21+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "M"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-17T07:22:57+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-09-17T07:22:55+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Target",
                "updated_at": "2026-09-17T07:22:59+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": [
              {
                "id": "3237206942",
                "name": "Implement design",
                "parent_item": {
                  "id": "3229501429",
                  "name": "Build progression ui page"
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
                    "label": "Task",
                    "updated_at": "2026-09-22T07:22:24+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Task"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "S",
                    "updated_at": "2026-09-22T06:41:37+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "S"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Lobby",
                    "updated_at": "2026-09-22T07:22:31+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Lobby"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Vision",
                    "updated_at": "2026-09-22T07:22:32+00:00",
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Vision"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Target",
                    "updated_at": "2026-09-22T07:22:34+00:00",
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
                    "text": "Asaf Bashari"
                  }
                ]
              },
              {
                "id": "3237207777",
                "name": "Build controller script",
                "parent_item": {
                  "id": "3229501429",
                  "name": "Build progression ui page"
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
                    "label": "Task",
                    "updated_at": "2026-09-22T07:22:24+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Task"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "S",
                    "updated_at": "2026-09-22T06:41:40+00:00",
                    "column": {
                      "id": "color_mm5fnp1x",
                      "title": "Size Estimation"
                    },
                    "text": "S"
                  },
                  {
                    "id": "color_mm5fj7av",
                    "label": "Lobby",
                    "updated_at": "2026-09-22T07:22:31+00:00",
                    "column": {
                      "id": "color_mm5fj7av",
                      "title": "Domain"
                    },
                    "text": "Lobby"
                  },
                  {
                    "id": "color_mm5fqavz",
                    "label": "Vision",
                    "updated_at": "2026-09-22T07:22:32+00:00",
                    "column": {
                      "id": "color_mm5fqavz",
                      "title": "Strategic Category"
                    },
                    "text": "Vision"
                  },
                  {
                    "id": "color_mm5k7m7a",
                    "label": "Target",
                    "updated_at": "2026-09-22T07:22:34+00:00",
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
                    "text": "Asaf Bashari"
                  }
                ]
              }
            ]
          },
          {
            "id": "3229516384",
            "name": "open progression ui from lobby",
            "parent_item": {
              "id": "3221363215",
              "name": "Trophy Progression Screen - Dev"
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
                "label": "Task",
                "updated_at": "2026-09-17T07:23:11+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "No Effort",
                "updated_at": "2026-09-17T06:58:20+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "No Effort"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-17T07:23:02+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-09-17T07:23:00+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Target",
                "updated_at": "2026-09-17T07:23:03+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          },
          {
            "id": "3237206942",
            "name": "Implement design",
            "parent_item": {
              "id": "3229501429",
              "name": "Build progression ui page"
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
                "label": "Task",
                "updated_at": "2026-09-22T07:22:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-22T06:41:37+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-22T07:22:31+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-09-22T07:22:32+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Target",
                "updated_at": "2026-09-22T07:22:34+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          },
          {
            "id": "3237207777",
            "name": "Build controller script",
            "parent_item": {
              "id": "3229501429",
              "name": "Build progression ui page"
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
                "label": "Task",
                "updated_at": "2026-09-22T07:22:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Task"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-22T06:41:40+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-22T07:22:31+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-09-22T07:22:32+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Target",
                "updated_at": "2026-09-22T07:22:34+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3221363216",
        "name": "Safe Space Booster - Dev",
        "column_values": [
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
            "text": "Pending"
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
            "text": "L"
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
            "text": "Game Content"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": "Asaf Bashari"
          }
        ],
        "subitems": [
          {
            "id": "3221378670",
            "name": "Active Safe Space Animation",
            "parent_item": {
              "id": "3221363216",
              "name": "Safe Space Booster - Dev"
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
                "updated_at": "2026-09-14T08:28:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-22T07:21:51+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-09-22T06:39:08+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-17T07:22:33+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-17T07:22:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-07T20:38:16+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          },
          {
            "id": "3221378671",
            "name": "Blocked Attack Animation",
            "parent_item": {
              "id": "3221363216",
              "name": "Safe Space Booster - Dev"
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
                "updated_at": "2026-09-14T08:28:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-22T07:21:51+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-09-22T06:39:11+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-17T07:22:33+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-17T07:22:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-07T20:38:18+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          },
          {
            "id": "3221378672",
            "name": "Safe Space Expiration & Flower Reward Animation",
            "parent_item": {
              "id": "3221363216",
              "name": "Safe Space Booster - Dev"
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
                "updated_at": "2026-09-14T08:28:16+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-22T07:21:51+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-09-22T06:39:16+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-17T07:22:33+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-17T07:22:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-07T20:38:20+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          },
          {
            "id": "3237197767",
            "name": "Game Logic",
            "parent_item": {
              "id": "3221363216",
              "name": "Safe Space Booster - Dev"
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
                "updated_at": "2026-09-22T07:21:51+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-22T06:37:44+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-22T07:21:54+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-22T07:21:55+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-22T07:22:04+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          },
          {
            "id": "3237200759",
            "name": "Progression Config",
            "parent_item": {
              "id": "3221363216",
              "name": "Safe Space Booster - Dev"
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
                "updated_at": "2026-09-22T07:21:51+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-09-22T06:37:55+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-22T07:21:54+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-22T07:21:55+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-22T07:22:04+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          },
          {
            "id": "3237201853",
            "name": "Testing",
            "parent_item": {
              "id": "3221363216",
              "name": "Safe Space Booster - Dev"
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
                "updated_at": "2026-09-22T07:21:51+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-22T06:37:49+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-22T07:21:54+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-22T07:21:55+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-22T07:22:04+00:00",
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
                "text": "Asaf Bashari"
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3221430414",
        "name": "🎨Win Streak - Only UI",
        "column_values": [
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
            "text": "Pending"
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
            "text": "S"
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
            "text": "Game Content"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": []
      },
      {
        "id": "3230372116",
        "name": "🎨Safe Space Booster - Only UI part 2",
        "column_values": [
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
            "text": "Work In Progress"
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
            "text": "M"
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
            "text": "Game Content"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": [
          {
            "id": "3230387538",
            "name": "Safe space booster card",
            "parent_item": {
              "id": "3230372116",
              "name": "🎨Safe Space Booster - Only UI part 2"
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
                "updated_at": "2026-09-23T07:32:20+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-22T07:59:54+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-17T11:33:19+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-22T07:59:39+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-22T07:23:03+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-22T07:23:05+00:00",
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
            "id": "3230387646",
            "name": "Safe space booster card animation",
            "parent_item": {
              "id": "3230372116",
              "name": "🎨Safe Space Booster - Only UI part 2"
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
                "updated_at": "2026-09-23T07:33:04+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Work In Progress"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-22T07:59:56+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-17T11:33:16+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-22T07:59:40+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-22T07:23:03+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-22T07:23:05+00:00",
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
            "id": "3230406513",
            "name": "Safe space booster logo",
            "parent_item": {
              "id": "3230372116",
              "name": "🎨Safe Space Booster - Only UI part 2"
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
                "label": "Epic",
                "updated_at": "2026-09-22T07:59:58+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-17T11:33:14+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Brainstorm Match",
                "updated_at": "2026-09-22T07:59:42+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Brainstorm Match"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Game Content",
                "updated_at": "2026-09-22T07:23:03+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Game Content"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-22T07:23:05+00:00",
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
    ]
  }
}

  return res;
}
