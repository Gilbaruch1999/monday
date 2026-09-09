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
            "text": "Ready for Takeoff"
          },
          {
            "column": {
              "id": "color_mm5k4f4",
              "title": "Workstream"
            },
            "text": "Design"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-06T12:54:17+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T12:54:12+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
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
        "id": "3208220047",
        "name": "Build Zen Zone POC",
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
            "text": "Not Defined"
          },
          {
            "column": {
              "id": "color_mm5k4f4",
              "title": "Workstream"
            },
            "text": "Dev"
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
            "text": "General"
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
              "id": "person",
              "title": "Assigned"
            },
            "text": ""
          }
        ],
        "subitems": []
      },
      {
        "id": "3208298246",
        "name": "🎨Safe Space Booster - Only UI",
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
            "text": "Ready for Takeoff"
          },
          {
            "column": {
              "id": "color_mm5k4f4",
              "title": "Workstream"
            },
            "text": "Design"
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
            "id": "3208359515",
            "name": "🎨Active Safe Space Animation",
            "parent_item": {
              "id": "3208298246",
              "name": "🎨Safe Space Booster - Only UI"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-09T07:46:30+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T13:25:16+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-06T13:25:19+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "M",
                "updated_at": "2026-09-07T20:33:03+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "M"
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
                "text": "Katerina sayko"
              }
            ],
            "subitems": [
              {
                "id": "3210992538",
                "name": "Generate Animation",
                "parent_item": {
                  "id": "3208359515",
                  "name": "🎨Active Safe Space Animation"
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
                    "label": "Not Defined",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Not Defined"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k4f4",
                      "title": "Workstream"
                    },
                    "text": "Pending"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-09-07T20:37:17+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "S",
                    "updated_at": "2026-09-07T20:33:23+00:00",
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
                ]
              },
              {
                "id": "3211026090",
                "name": "Create png sequense and save it",
                "parent_item": {
                  "id": "3208359515",
                  "name": "🎨Active Safe Space Animation"
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
                    "label": "Not Defined",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Not Defined"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k4f4",
                      "title": "Workstream"
                    },
                    "text": "Pending"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-09-07T20:37:20+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "S",
                    "updated_at": "2026-09-07T20:34:26+00:00",
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
                ]
              }
            ]
          },
          {
            "id": "3208367835",
            "name": "🎨Blocked Attack Animation",
            "parent_item": {
              "id": "3208298246",
              "name": "🎨Safe Space Booster - Only UI"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-06T13:25:17+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T13:25:16+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-06T13:25:19+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "M",
                "updated_at": "2026-09-07T20:35:10+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "M"
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
                "text": "Katerina sayko"
              }
            ],
            "subitems": [
              {
                "id": "3210997550",
                "name": "generate animation",
                "parent_item": {
                  "id": "3208367835",
                  "name": "🎨Blocked Attack Animation"
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
                    "label": "Not Defined",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Not Defined"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k4f4",
                      "title": "Workstream"
                    },
                    "text": "Pending"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-09-07T20:37:27+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "S",
                    "updated_at": "2026-09-07T20:35:43+00:00",
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
                ]
              },
              {
                "id": "3210988277",
                "name": "ceate png sequence and save",
                "parent_item": {
                  "id": "3208367835",
                  "name": "🎨Blocked Attack Animation"
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
                    "label": "Not Defined",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5fb7mm",
                      "title": "Planning Status"
                    },
                    "text": "Not Defined"
                  },
                  {
                    "id": "color_mm5k4f4",
                    "label": "Pending",
                    "updated_at": null,
                    "column": {
                      "id": "color_mm5k4f4",
                      "title": "Workstream"
                    },
                    "text": "Pending"
                  },
                  {
                    "id": "color_mm5fx8bd",
                    "label": "Story",
                    "updated_at": "2026-09-07T20:37:29+00:00",
                    "column": {
                      "id": "color_mm5fx8bd",
                      "title": "Issue Type"
                    },
                    "text": "Story"
                  },
                  {
                    "id": "color_mm5fnp1x",
                    "label": "S",
                    "updated_at": "2026-09-07T20:35:46+00:00",
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
                ]
              }
            ]
          },
          {
            "id": "3208371710",
            "name": "🎨Safe Space Expiration & Flower Reward Animation",
            "parent_item": {
              "id": "3208298246",
              "name": "🎨Safe Space Booster - Only UI"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-06T13:25:17+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T13:25:16+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Epic",
                "updated_at": "2026-09-09T08:19:01+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Epic"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-07T20:37:01+00:00",
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
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3210992538",
            "name": "Generate Animation",
            "parent_item": {
              "id": "3208359515",
              "name": "🎨Active Safe Space Animation"
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
                "label": "Not Defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Not Defined"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-07T20:37:17+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-07T20:33:23+00:00",
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
            "id": "3211026090",
            "name": "Create png sequense and save it",
            "parent_item": {
              "id": "3208359515",
              "name": "🎨Active Safe Space Animation"
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
                "label": "Not Defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Not Defined"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-07T20:37:20+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-07T20:34:26+00:00",
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
            "id": "3210997550",
            "name": "generate animation",
            "parent_item": {
              "id": "3208367835",
              "name": "🎨Blocked Attack Animation"
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
                "label": "Not Defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Not Defined"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-07T20:37:27+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-07T20:35:43+00:00",
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
            "id": "3210988277",
            "name": "ceate png sequence and save",
            "parent_item": {
              "id": "3208367835",
              "name": "🎨Blocked Attack Animation"
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
                "label": "Not Defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Not Defined"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Pending",
                "updated_at": null,
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Pending"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-07T20:37:29+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-07T20:35:46+00:00",
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
            "text": "Ready for Takeoff"
          },
          {
            "column": {
              "id": "color_mm5k4f4",
              "title": "Workstream"
            },
            "text": "Design"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-06T14:22:38+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T14:22:33+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-06T14:22:38+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T14:22:41+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-06T14:22:38+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T14:22:41+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
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
                "label": "Ready for Takeoff",
                "updated_at": "2026-09-06T14:22:38+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Ready for Takeoff"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T14:22:41+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
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
        "id": "3208309529",
        "name": "🎨Trophy Progression Screen - Only UI",
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
              "id": "color_mm5k4f4",
              "title": "Workstream"
            },
            "text": "Design"
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
            "id": "3208335679",
            "name": "UI",
            "parent_item": {
              "id": "3208309529",
              "name": "🎨Trophy Progression Screen - Only UI"
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
                "updated_at": "2026-09-09T07:44:39+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Work In Progress"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-06T12:53:49+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-06T12:53:47+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-09T07:45:13+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-09T08:02:02+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-09-09T08:02:08+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-07T13:06:51+00:00",
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
            "id": "3214143948",
            "name": "Background",
            "parent_item": {
              "id": "3208309529",
              "name": "🎨Trophy Progression Screen - Only UI"
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
                "label": "Not Defined",
                "updated_at": null,
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Not Defined"
              },
              {
                "id": "color_mm5k4f4",
                "label": "Design",
                "updated_at": "2026-09-09T08:01:47+00:00",
                "column": {
                  "id": "color_mm5k4f4",
                  "title": "Workstream"
                },
                "text": "Design"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-09-09T08:01:44+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-09-09T07:45:15+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Lobby",
                "updated_at": "2026-09-09T08:02:05+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Lobby"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-09-09T08:02:11+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-09-09T07:45:27+00:00",
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
