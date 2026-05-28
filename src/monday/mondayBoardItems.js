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

export function getMondayDummyBoardItems(boardid) {
  const res = {

  "data": {
    "boards": [
      {
        "name": "Sprint Backlog | Dev Team 1",
        "items_page": {
          "items": [
            {
              "name": "First Match Guided Onboarding (MVP FTUE)",
              "id": "2917006546",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "id": "status",
                  "label": "Done",
                  "updated_at": "2026-05-25T17:45:56+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Done"
                },
                {
                  "id": "status_13__1",
                  "label": "Epic",
                  "updated_at": "2026-05-17T09:08:14+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Epic"
                },
                {
                  "id": "status_19__1",
                  "label": "M",
                  "updated_at": "2026-05-20T08:02:16+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "M"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Onboarding",
                  "updated_at": "2026-05-17T16:50:13+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Onboarding"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "User Needs",
                  "updated_at": "2026-05-17T16:50:10+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "User Needs"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Minimum",
                  "updated_at": "2026-05-17T16:50:09+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Minimum"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:04:51+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "2026-05-25"
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Dev - Implement",
                  "id": "2921403212",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Done",
                      "updated_at": "2026-05-25T06:19:58+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Done"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-17T09:08:12+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "S",
                      "updated_at": "2026-05-24T07:43:20+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": "2026-05-25"
                    }
                  ]
                },
                {
                  "name": "Dev - Add FTUE Analytics Flags",
                  "id": "2921422029",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Done",
                      "updated_at": "2026-05-25T17:45:53+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Done"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-17T09:08:10+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-24T07:43:22+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": "2026-05-25"
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Highlight Active Booster Button",
              "id": "2909743297",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari, Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Done",
                  "updated_at": "2026-05-25T12:35:34+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Done"
                },
                {
                  "id": "status_13__1",
                  "label": "Epic",
                  "updated_at": "2026-05-12T08:59:01+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Epic"
                },
                {
                  "id": "status_19__1",
                  "label": "xS",
                  "updated_at": "2026-05-20T08:05:18+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "xS"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Brain Storm",
                  "updated_at": "2026-05-12T08:47:56+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Brain Storm"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "User Needs",
                  "updated_at": "2026-05-12T08:48:00+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "User Needs"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Minimum",
                  "updated_at": "2026-05-17T16:53:09+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Minimum"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:07:57+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "2026-05-25"
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Development",
                  "id": "2909757454",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Done",
                      "updated_at": "2026-05-25T12:35:38+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Done"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-12T08:49:09+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-20T08:02:07+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": "2026-05-25"
                    }
                  ]
                },
                {
                  "name": "🎨Animation",
                  "id": "2909757935",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Removed",
                      "updated_at": "2026-05-26T19:24:59+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Removed"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-12T08:49:09+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Account Connection & Settings Menu",
              "id": "2926520348",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari, Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Work In Progress",
                  "updated_at": "2026-05-25T12:15:57+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Work In Progress"
                },
                {
                  "id": "status_13__1",
                  "label": "Story",
                  "updated_at": "2026-05-20T10:45:03+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Story"
                },
                {
                  "id": "status_19__1",
                  "label": "M",
                  "updated_at": "2026-05-24T08:04:37+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "M"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Lobby",
                  "updated_at": "2026-05-20T08:15:14+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Lobby"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Vision",
                  "updated_at": "2026-05-20T08:15:13+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Vision"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Minimum",
                  "updated_at": "2026-05-25T07:44:14+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Minimum"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Are You Ready?",
                  "updated_at": "2026-05-26T08:06:43+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Are You Ready?"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Design - Hamburger Menu Button",
                  "id": "2929813270",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Done",
                      "updated_at": "2026-05-25T21:24:29+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Done"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T12:35:59+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-25T21:24:39+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": "2026-05-26"
                    }
                  ]
                },
                {
                  "name": "Design - Let's connect popup",
                  "id": "2929819254",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Done",
                      "updated_at": "2026-05-26T13:20:27+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Done"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T12:35:59+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "S",
                      "updated_at": "2026-05-20T11:49:46+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": "2026-05-26"
                    }
                  ]
                },
                {
                  "name": "Design - Settings popup",
                  "id": "2929818529",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Work In Progress",
                      "updated_at": "2026-05-26T13:20:29+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Work In Progress"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T12:35:59+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "S",
                      "updated_at": "2026-05-20T11:50:31+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Account Connection & Settings Menu",
              "id": "2939268879",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "id": "status",
                  "label": "Wait",
                  "updated_at": "2026-05-25T06:24:10+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Wait"
                },
                {
                  "id": "status_13__1",
                  "label": "Story",
                  "updated_at": "2026-05-25T12:36:09+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Story"
                },
                {
                  "id": "status_19__1",
                  "label": "M",
                  "updated_at": "2026-05-25T08:03:27+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "M"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Lobby",
                  "updated_at": "2026-05-26T08:06:22+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Lobby"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Vision",
                  "updated_at": "2026-05-26T08:06:29+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Vision"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Minimum",
                  "updated_at": "2026-05-25T07:44:09+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Minimum"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Are You Ready?",
                  "updated_at": null,
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Are You Ready?"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Build UI",
                  "id": "2939249968",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T12:36:13+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Import account connected code",
                  "id": "2939268736",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T12:36:13+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Test account connectinon",
                  "id": "2939259694",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T12:36:13+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Test audio controls",
                  "id": "2939247478",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T12:36:13+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "How Many Coffees Do I need? ☕",
                      "updated_at": null,
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Exclude Internal Team Accounts from Analytics",
              "id": "2929546680",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari, Dan Bouzaglo"
                },
                {
                  "id": "status",
                  "label": "Wait",
                  "updated_at": "2026-05-25T06:20:38+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Wait"
                },
                {
                  "id": "status_13__1",
                  "label": "Task",
                  "updated_at": "2026-05-20T10:49:17+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Task"
                },
                {
                  "id": "status_19__1",
                  "label": "xS",
                  "updated_at": "2026-05-24T08:09:11+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "xS"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "General",
                  "updated_at": "2026-05-20T10:49:21+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "General"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Vision",
                  "updated_at": "2026-05-20T10:49:28+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Vision"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Target",
                  "updated_at": "2026-05-20T10:49:30+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Target"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Are You Ready?",
                  "updated_at": null,
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Are You Ready?"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Create a new file hierarchy in Figma and Google Drive",
              "id": "2906550983",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Work In Progress",
                  "updated_at": "2026-05-24T07:44:45+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Work In Progress"
                },
                {
                  "id": "status_13__1",
                  "label": "Task",
                  "updated_at": "2026-05-12T08:52:20+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Task"
                },
                {
                  "id": "status_19__1",
                  "label": "M",
                  "updated_at": "2026-05-19T08:26:28+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "M"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Team Development",
                  "updated_at": "2026-05-12T08:52:25+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Team Development"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Team Development",
                  "updated_at": "2026-05-12T08:52:26+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Team Development"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Target",
                  "updated_at": "2026-05-12T08:52:31+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Target"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨New hierarchy in Figma",
                  "id": "2925909791",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Done",
                      "updated_at": "2026-05-25T12:15:54+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Done"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T13:00:46+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "S",
                      "updated_at": "2026-05-19T08:26:52+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": "2026-05-25"
                    }
                  ]
                },
                {
                  "name": "🎨New hierarchy in Google Drive",
                  "id": "2925900054",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Task",
                      "updated_at": "2026-05-25T13:00:48+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Task"
                    },
                    {
                      "id": "status_17__1",
                      "label": "S",
                      "updated_at": "2026-05-19T08:27:08+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Design - Migraine Booster Card | Earthquake Booster (Migraine) - New Booster",
              "id": "2916265734",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Please Take Me 🥹",
                  "updated_at": null,
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "id": "status_13__1",
                  "label": "Task",
                  "updated_at": "2026-05-18T08:21:23+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Task"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-18T16:51:06+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Brain Storm",
                  "updated_at": "2026-05-18T08:23:32+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Brain Storm"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Game Content",
                  "updated_at": "2026-05-18T08:23:29+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Game Content"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Target",
                  "updated_at": "2026-05-18T08:23:33+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Target"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Design - In-Game Animation | Migraine Booster - New Booster",
              "id": "2916276201",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Please Take Me 🥹",
                  "updated_at": null,
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "id": "status_13__1",
                  "label": "Task",
                  "updated_at": "2026-05-18T08:21:23+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Task"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-18T16:51:16+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Brain Storm",
                  "updated_at": "2026-05-18T08:23:32+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Brain Storm"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Game Content",
                  "updated_at": "2026-05-18T08:23:29+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Game Content"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Target",
                  "updated_at": "2026-05-18T08:23:33+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Target"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Design - Like MindedBooster Card | Like Minded Booster - New Booster",
              "id": "2916284135",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Please Take Me 🥹",
                  "updated_at": null,
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "id": "status_13__1",
                  "label": "Task",
                  "updated_at": "2026-05-18T08:21:23+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Task"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-18T16:51:18+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Brain Storm",
                  "updated_at": "2026-05-18T08:23:32+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Brain Storm"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Game Content",
                  "updated_at": "2026-05-18T08:23:29+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Game Content"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Target",
                  "updated_at": "2026-05-18T08:23:33+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Target"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Design - In-Game Like Minded Animation | Like Minded Booster - New Booster",
              "id": "2916284105",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Please Take Me 🥹",
                  "updated_at": null,
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "id": "status_13__1",
                  "label": "Task",
                  "updated_at": "2026-05-18T08:21:23+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Task"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-18T16:51:20+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Brain Storm",
                  "updated_at": "2026-05-18T08:23:32+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Brain Storm"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Game Content",
                  "updated_at": "2026-05-18T08:23:29+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Game Content"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Target",
                  "updated_at": "2026-05-18T08:23:33+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Target"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Add Match Found Countdown During Matchmaking",
              "id": "2910121414",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "id": "status",
                  "label": "Work In Progress",
                  "updated_at": "2026-05-25T06:21:06+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Work In Progress"
                },
                {
                  "id": "status_13__1",
                  "label": "Task",
                  "updated_at": "2026-05-12T09:25:30+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Task"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-20T08:02:23+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Brain Storm",
                  "updated_at": "2026-05-12T09:25:41+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Brain Storm"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "User Needs",
                  "updated_at": "2026-05-12T09:25:47+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "User Needs"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Outstanding",
                  "updated_at": "2026-05-18T07:39:46+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Outstanding"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Implement | Carousel “How to Play” Screen",
              "id": "2898220392",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "id": "status",
                  "label": "Done",
                  "updated_at": "2026-05-25T06:20:17+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Done"
                },
                {
                  "id": "status_13__1",
                  "label": "Story",
                  "updated_at": "2026-05-14T12:20:58+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Story"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-20T08:02:28+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Lobby",
                  "updated_at": "2026-05-14T12:20:26+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Lobby"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Cosmetics",
                  "updated_at": "2026-05-14T12:20:29+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Cosmetics"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Outstanding",
                  "updated_at": "2026-05-14T12:20:31+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Outstanding"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "2026-05-25"
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Lobby Passive Animation for Mio",
              "id": "2909871255",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari, Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Please Take Me 🥹",
                  "updated_at": null,
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "id": "status_13__1",
                  "label": "Epic",
                  "updated_at": "2026-05-12T08:59:00+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Epic"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-20T08:06:51+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Lobby",
                  "updated_at": "2026-05-12T08:59:48+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Lobby"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Cosmetics",
                  "updated_at": "2026-05-12T08:59:08+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Cosmetics"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Outstanding",
                  "updated_at": "2026-05-17T16:42:40+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Outstanding"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "2909872262",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-12T08:59:07+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "S",
                      "updated_at": "2026-05-18T16:51:33+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Development",
                  "id": "2909881715",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-12T08:59:05+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-20T08:02:36+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Company Name Splash Screen",
              "id": "2905803600",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari, Katerina sayko"
                },
                {
                  "id": "status",
                  "label": "Please Take Me 🥹",
                  "updated_at": null,
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "id": "status_13__1",
                  "label": "Story",
                  "updated_at": "2026-05-11T08:28:37+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Story"
                },
                {
                  "id": "status_19__1",
                  "label": "xS",
                  "updated_at": "2026-05-18T16:51:53+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "xS"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "General",
                  "updated_at": "2026-05-12T08:56:24+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "General"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Cosmetics",
                  "updated_at": "2026-05-12T08:56:20+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Cosmetics"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Outstanding",
                  "updated_at": "2026-05-12T08:56:29+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Outstanding"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "2905789462",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-11T08:28:42+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-18T16:51:51+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Development",
                  "id": "2905976808",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": "2026-05-18T08:32:08+00:00",
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-18T08:32:21+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "No Effort",
                      "updated_at": "2026-05-18T07:59:03+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Subtle Screen Transition Fade (Dissolve)",
              "id": "2910085276",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "id": "status",
                  "label": "Work In Progress",
                  "updated_at": "2026-05-25T18:22:02+00:00",
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Work In Progress"
                },
                {
                  "id": "status_13__1",
                  "label": "Story",
                  "updated_at": "2026-05-12T09:42:08+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Story"
                },
                {
                  "id": "status_19__1",
                  "label": "S",
                  "updated_at": "2026-05-20T08:24:29+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "S"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Lobby",
                  "updated_at": "2026-05-12T09:27:52+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Lobby"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Cosmetics",
                  "updated_at": "2026-05-12T09:27:54+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Cosmetics"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Outstanding",
                  "updated_at": "2026-05-17T16:44:37+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Outstanding"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-26T08:07:10+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Booster Naming & Popup UI Update",
              "id": "2916123406",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems",
                    "type": "subtasks",
                    "settings": {
                      "allowMultipleItems": true,
                      "itemTypeName": "column.subtasks.title",
                      "displayType": "BOARD_INLINE",
                      "boardIds": [
                        1647137428
                      ]
                    }
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned",
                    "type": "people",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": "Katerina sayko, Asaf Bashari"
                },
                {
                  "id": "status",
                  "label": "Please Take Me 🥹",
                  "updated_at": null,
                  "column": {
                    "id": "status",
                    "title": "Status",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Work In Progress",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 0,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 11,
                          "label": "Stuck",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 4,
                          "color": 15,
                          "label": "PO Review Me",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Please Take Me 🥹",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 19,
                          "label": "Removed",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#ff6d3b"
                        },
                        {
                          "id": 7,
                          "color": 1,
                          "label": "Code Review Me",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 8,
                          "color": 158,
                          "label": "Wait",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 9,
                          "color": 108,
                          "label": "Design Review Me",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 10,
                          "color": 10,
                          "label": "Pushed Out",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 11,
                          "color": 2,
                          "label": "Next Sprint",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 12,
                          "color": 101,
                          "label": "Not Planned",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff7575"
                        }
                      ]
                    }
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "id": "status_13__1",
                  "label": "Epic",
                  "updated_at": "2026-05-14T12:19:24+00:00",
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 7,
                          "label": "Task",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 1,
                          "color": 4,
                          "label": "Story",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 2,
                          "color": 2,
                          "label": "Bug",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 3,
                          "color": 108,
                          "label": "Spike",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 4,
                          "color": 8,
                          "label": "Epic",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "What Flavor Is This? 🍦",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 8,
                          "color": 10,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        }
                      ]
                    }
                  },
                  "text": "Epic"
                },
                {
                  "id": "status_19__1",
                  "label": "M",
                  "updated_at": "2026-05-20T08:01:41+00:00",
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How Many Coffees Do I need? ☕",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 15,
                          "color": 6,
                          "label": "xS",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 16,
                          "color": 1,
                          "label": "S",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 17,
                          "color": 0,
                          "label": "M",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 18,
                          "color": 2,
                          "label": "L",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 19,
                          "color": 11,
                          "label": "xL",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 101,
                          "color": 151,
                          "label": "No Effort",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#563e3e"
                        }
                      ]
                    }
                  },
                  "text": "M"
                },
                {
                  "id": "color_mkperz3j",
                  "label": "Lobby",
                  "updated_at": "2026-05-14T12:19:29+00:00",
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 0,
                          "label": "Growth Galaxy",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 1,
                          "color": 159,
                          "label": "General",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#cd9282"
                        },
                        {
                          "id": 2,
                          "color": 108,
                          "label": "Idea Forge",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#4eccc6"
                        },
                        {
                          "id": 3,
                          "color": 6,
                          "label": "Zen Zone",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Build System",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Where We At? 🕵️‍♂️",
                          "index": 11,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 13,
                          "label": "Onboarding",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ff5ac4"
                        },
                        {
                          "id": 7,
                          "color": 7,
                          "label": "Lobby",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#579bfc"
                        },
                        {
                          "id": 8,
                          "color": 109,
                          "label": "Shop",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#5559df"
                        },
                        {
                          "id": 9,
                          "color": 16,
                          "label": "Profile",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#66ccff"
                        },
                        {
                          "id": 10,
                          "color": 158,
                          "label": "Team Development",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 11,
                          "color": 110,
                          "label": "Brain Storm",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#401694"
                        }
                      ]
                    }
                  },
                  "text": "Lobby"
                },
                {
                  "id": "color_mkr3bggc",
                  "label": "Cosmetics",
                  "updated_at": "2026-05-14T12:19:31+00:00",
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 152,
                          "label": "User Needs",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bda8f9"
                        },
                        {
                          "id": 1,
                          "color": 14,
                          "label": "Game Content",
                          "index": 1,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#784bd1"
                        },
                        {
                          "id": 2,
                          "color": 109,
                          "label": "Vision",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#5559df"
                        },
                        {
                          "id": 3,
                          "color": 104,
                          "label": "Personal Development",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7e3b8a"
                        },
                        {
                          "id": 4,
                          "color": 11,
                          "label": "Monetization",
                          "index": 6,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#bb3354"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Why Though? 🤨",
                          "index": 10,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 10,
                          "label": "Disruptions",
                          "index": 9,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#333333"
                        },
                        {
                          "id": 7,
                          "color": 158,
                          "label": "Team Development",
                          "index": 8,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#a1e3f6"
                        },
                        {
                          "id": 8,
                          "color": 2,
                          "label": "Big Bug",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#df2f4a"
                        },
                        {
                          "id": 9,
                          "color": 18,
                          "label": "Technical Debt",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": true,
                          "hex": "#7f5347"
                        },
                        {
                          "id": 10,
                          "color": 102,
                          "label": "Cosmetics",
                          "index": 7,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#faa1f1"
                        }
                      ]
                    }
                  },
                  "text": "Cosmetics"
                },
                {
                  "id": "color_mktax0mb",
                  "label": "Outstanding",
                  "updated_at": "2026-05-17T16:45:29+00:00",
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 1,
                          "label": "Target",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Outstanding",
                          "index": 2,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 15,
                          "label": "Minimum",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9cd326"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "How bad do you want it? 😤",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        }
                      ]
                    }
                  },
                  "text": "Outstanding"
                },
                {
                  "id": "color_mktjp2gz",
                  "label": "Committed",
                  "updated_at": "2026-05-20T08:08:07+00:00",
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State",
                    "type": "status",
                    "settings": {
                      "labels": [
                        {
                          "id": 0,
                          "color": 9,
                          "label": "Pre-Planning",
                          "index": 1,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#ffcb00"
                        },
                        {
                          "id": 1,
                          "color": 6,
                          "label": "Done",
                          "index": 6,
                          "is_done": true,
                          "is_deactivated": false,
                          "hex": "#037f4c"
                        },
                        {
                          "id": 2,
                          "color": 0,
                          "label": "Planning",
                          "index": 3,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#fdab3d"
                        },
                        {
                          "id": 3,
                          "color": 8,
                          "label": "Analysis",
                          "index": 2,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#cab641"
                        },
                        {
                          "id": 4,
                          "color": 4,
                          "label": "Committed",
                          "index": 5,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#9d50dd"
                        },
                        {
                          "id": 5,
                          "color": 5,
                          "label": "Are You Ready?",
                          "index": 0,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#c4c4c4"
                        },
                        {
                          "id": 6,
                          "color": 1,
                          "label": "Decision",
                          "index": 4,
                          "is_done": false,
                          "is_deactivated": false,
                          "hex": "#00c875"
                        }
                      ]
                    }
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate",
                    "type": "date",
                    "settings": {
                      "hide_footer": false
                    }
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score",
                    "type": "numbers",
                    "settings": {}
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Earthquake Booster (Name) - Design",
                  "id": "2916142861",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-14T12:19:22+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-18T16:52:18+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Ice Booster (Name) - Design",
                  "id": "2916142864",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-14T12:19:22+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-18T16:52:20+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Board Swap Booster (Name) - Design",
                  "id": "2916129455",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-14T12:19:22+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-18T16:52:22+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Steal Booster (Name) - Design",
                  "id": "2916189041",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-14T12:19:22+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "xS",
                      "updated_at": "2026-05-18T16:52:28+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Implement",
                  "id": "2916152567",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned",
                        "settings": {}
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "id": "status4__1",
                      "label": "Please Take Me 🥹",
                      "updated_at": null,
                      "column": {
                        "id": "status4__1",
                        "title": "Status",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 0,
                              "label": "Work In Progress",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 1,
                              "color": 6,
                              "label": "Done",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 2,
                              "color": 15,
                              "label": "PO Review Me",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9cd326"
                            },
                            {
                              "id": 3,
                              "color": 101,
                              "label": "Started",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff7575"
                            },
                            {
                              "id": 4,
                              "color": 11,
                              "label": "Not Planned",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Please Take Me 🥹",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 19,
                              "label": "Removed",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#ff6d3b"
                            },
                            {
                              "id": 7,
                              "color": 158,
                              "label": "Wait",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 8,
                              "color": 1,
                              "label": "Code Review Me",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 9,
                              "color": 108,
                              "label": "Design Review Me",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 10,
                              "color": 2,
                              "label": "Next Sprint",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 11,
                              "color": 10,
                              "label": "Pushed Out",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "id": "status__1",
                      "label": "Story",
                      "updated_at": "2026-05-14T12:19:22+00:00",
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 108,
                              "label": "Spike",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#4eccc6"
                            },
                            {
                              "id": 1,
                              "color": 8,
                              "label": "Epic",
                              "index": 0,
                              "is_done": true,
                              "is_deactivated": true,
                              "hex": "#cab641"
                            },
                            {
                              "id": 2,
                              "color": 2,
                              "label": "Bug",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 3,
                              "color": 7,
                              "label": "Task",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 4,
                              "color": 4,
                              "label": "Story",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#9d50dd"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "Not selected yet",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 7,
                              "color": 10,
                              "label": "Technical Debt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#333333"
                            }
                          ]
                        }
                      },
                      "text": "Story"
                    },
                    {
                      "id": "status_17__1",
                      "label": "S",
                      "updated_at": "2026-05-20T08:03:11+00:00",
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points",
                        "settings": {
                          "labels": [
                            {
                              "id": 0,
                              "color": 110,
                              "label": "No Effort",
                              "index": 14,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#401694"
                            },
                            {
                              "id": 2,
                              "color": 109,
                              "label": "Three Days - 48 pt",
                              "index": 0,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#5559df"
                            },
                            {
                              "id": 3,
                              "color": 153,
                              "label": "Two Days - 32 pt",
                              "index": 1,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#216edf"
                            },
                            {
                              "id": 4,
                              "color": 7,
                              "label": "One Day - 16 pt",
                              "index": 2,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#579bfc"
                            },
                            {
                              "id": 5,
                              "color": 5,
                              "label": "How Many Coffees Do I need? ☕",
                              "index": 12,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#c4c4c4"
                            },
                            {
                              "id": 6,
                              "color": 106,
                              "label": "Half a Day - 8 pt",
                              "index": 3,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#74afcc"
                            },
                            {
                              "id": 7,
                              "color": 16,
                              "label": "Two Hours - 4 pt",
                              "index": 4,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#66ccff"
                            },
                            {
                              "id": 8,
                              "color": 158,
                              "label": "One Hour - 2 pt",
                              "index": 5,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#a1e3f6"
                            },
                            {
                              "id": 9,
                              "color": 156,
                              "label": "Half an Hour - 1 pt",
                              "index": 6,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#9d99b9"
                            },
                            {
                              "id": 10,
                              "color": 104,
                              "label": "All Sprint long",
                              "index": 13,
                              "is_done": false,
                              "is_deactivated": true,
                              "hex": "#7e3b8a"
                            },
                            {
                              "id": 14,
                              "color": 6,
                              "label": "xS",
                              "index": 7,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#037f4c"
                            },
                            {
                              "id": 15,
                              "color": 1,
                              "label": "S",
                              "index": 8,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#00c875"
                            },
                            {
                              "id": 16,
                              "color": 0,
                              "label": "M",
                              "index": 9,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#fdab3d"
                            },
                            {
                              "id": 17,
                              "color": 2,
                              "label": "L",
                              "index": 10,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#df2f4a"
                            },
                            {
                              "id": 18,
                              "color": 11,
                              "label": "xL",
                              "index": 11,
                              "is_done": false,
                              "is_deactivated": false,
                              "hex": "#bb3354"
                            }
                          ]
                        }
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate",
                        "settings": {}
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  }
}


  return res;
}
