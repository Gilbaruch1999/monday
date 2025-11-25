import { createDateFromLocalText } from "./utils";

export function getDummyContext() {
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
    boardId: 5048014529,
    boardIds: [5048014529],
    //boardId: 1647137427,
    //boardIds: [1647137427],
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

export function getDummyBoardItems(boardid) {
  const res = {
    "data": {
    "boards": [
      {
        "items_page": {
          "items": [
            {
              "name": "Early-Game Pre-Stages  🎮",
              "id": "5084395121",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Evyatar Schorr"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "xL"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Review current early flow – find confusion points\n",
                  "id": "2514830025",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-17"
                    }
                  ]
                },
                {
                  "name": "Watch reference video – note pacing & clarity tricks",
                  "id": "2514830262",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-17"
                    }
                  ]
                },
                {
                  "name": "Define learning goals – what players should understand by end of onboarding levels",
                  "id": "2514837376",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-20"
                    }
                  ]
                },
                {
                  "name": "Plan Stage Onboarding levels (pacing, merges, rewards)",
                  "id": "2514837582",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-20"
                    }
                  ]
                },
                {
                  "name": "Assign “starter” idea items to each locked bamboo",
                  "id": "2514832260",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-25"
                    }
                  ]
                },
                {
                  "name": "Balance early progression – short, rewarding merges\n",
                  "id": "2514832474",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-25"
                    }
                  ]
                },
                {
                  "name": "List all bamboos – decide which stay locked early",
                  "id": "2514835163",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-25"
                    }
                  ]
                },
                {
                  "name": "Write short pitch summary for PO Mid mission Progress",
                  "id": "2527964664",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Work In Progress"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Define when each tutorial cue appears\n",
                  "id": "2514865504",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-25"
                    }
                  ]
                },
                {
                  "name": "Make visual map of early flow (Onboarding levels)",
                  "id": "2514866436",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Write short pitch summary for PO",
                  "id": "2514860331",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Create stage-by-stage doc for Idea Forge",
                  "id": "2514864536",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Evyatar Schorr"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Identify Player Acquisition Sources🧠",
              "id": "5069749454",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Dikla Yair"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "xS"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Monetization"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-11-18"
                }
              ],
              "subitems": []
            },
            {
              "name": "Onboarding Flow Full Diagram🎮",
              "id": "5084396117",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Shay Goft"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "L"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Team Development"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Core Growth Visualization 🧘 🎮",
              "id": "5069229744",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Oded Orly, Shay Goft"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "L"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Profile"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Personal Development"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Define 6 Core Growth Parameters 🧘",
                  "id": "5069301263",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-16"
                    }
                  ]
                },
                {
                  "name": "Parameter Level Structure 🎮",
                  "id": "5069307571",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Shay Goft"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-25"
                    }
                  ]
                },
                {
                  "name": "Fill Level Data 🎮",
                  "id": "5069346461",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Shay Goft"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Work In Progress"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "GG1 | E1-E4 | Final Adjustments Before Dev🧘",
              "id": "5080442142",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Oded Orly, Dikla Yair"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "xS"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Growth Galaxy"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-11-24"
                }
              ],
              "subitems": [
                {
                  "name": "GG1 | S1 | Exercise No.1",
                  "id": "5080464185",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly, Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-19"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.2",
                  "id": "5080464232",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly, Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-19"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.3",
                  "id": "5080464284",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly, Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-19"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.4",
                  "id": "5080464381",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly, Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-24"
                    }
                  ]
                }
              ]
            },
            {
              "name": "GG1 | E5-E14 | Final Adjustments Before Dev🧘",
              "id": "5080470298",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Oded Orly"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Wait"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Growth Galaxy"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "GG1 | S1 | Exercise No.5",
                  "id": "5080470316",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-18"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.6",
                  "id": "5080473007",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-18"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.7",
                  "id": "5080473102",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-18"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.8",
                  "id": "5080473111",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-18"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.9",
                  "id": "5080473192",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Wait"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.10",
                  "id": "5080473199",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-20"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.11",
                  "id": "5080473206",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-19"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.12",
                  "id": "5080473214",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-18"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.13",
                  "id": "5080473999",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-20"
                    }
                  ]
                },
                {
                  "name": "GG1 | S1 | Exercise No.14",
                  "id": "5080474064",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-20"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Item Release Library System 🧠",
              "id": "5024780377",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Dikla Yair"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-11-19"
                }
              ],
              "subitems": [
                {
                  "name": "mockup 1",
                  "id": "5071557231",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-19"
                    }
                  ]
                },
                {
                  "name": "mockup 2",
                  "id": "5071557465",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-19"
                    }
                  ]
                },
                {
                  "name": "assignment write",
                  "id": "5071558807",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-19"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Open Sub Reddit - r/Snooze",
              "id": "5059295316",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Oded Orly"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "L"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Monetization"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Are You Ready?"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Research - Competitors Community Strategy",
                  "id": "2531620590",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Work In Progress"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Community Format Decision",
                  "id": "5088013636",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Define Subreddit Structure",
                  "id": "5088013754",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Technical Setup",
                  "id": "2531625506",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Soft-Launch",
                  "id": "2531629048",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Micro-Influencer Outreach",
              "id": "5087298839",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Oded Orly"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Spike"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Team Development"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Team Development"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Are You Ready?"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Research",
                  "id": "5088024904",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Create Contact",
                  "id": "5088024906",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Create Follow Up Chart",
                  "id": "5088024914",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "What Flavor Is This? 🍦"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Lead a User Testing Session",
              "id": "5084396631",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Oded Orly"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "xS"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Team Development"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Team Development"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Find participants (From the USA) & Document",
                  "id": "5085387354",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-23"
                    }
                  ]
                },
                {
                  "name": "Schedule session before sprint ends",
                  "id": "5085387454",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "No Effort"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-11-23"
                    }
                  ]
                },
                {
                  "name": "Write observation goals (what we want to learn)",
                  "id": "5085388215",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Oded Orly"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Microcopy & Emotional Tone🧘🧠",
              "id": "5063253679",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Oded Orly"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "xS"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Profile"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "UX Design finish🧠",
                  "id": "5063255219",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Dikla Yair"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "GG1 | Exercise No.6 - UX 🧠",
              "id": "5045908669",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Dikla Yair"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Growth Galaxy"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "GG1 | Exercise No.7 - UX 🧠",
              "id": "5047649753",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Dikla Yair"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Growth Galaxy"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "GG Exercises - Level Design Mapping 🎮",
              "id": "5063258815",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Evyatar Schorr"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Post-User Testing Google Form Creation 🎮",
              "id": "5063196675",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Evyatar Schorr"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Team Development"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Team Development"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-11-24"
                }
              ],
              "subitems": []
            },
            {
              "name": "GG1 | Exercise No.10 - UX 🧠",
              "id": "5027466819",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Dikla Yair"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Wait"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Growth Galaxy"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Personal Development"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
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
