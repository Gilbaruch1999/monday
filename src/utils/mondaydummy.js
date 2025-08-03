export function getDummyContext() {
  const res = {
    themeConfig: null,
    theme: 'light',
    account: { id: '24603989' },
    user: {
      id: '72821851',
      isAdmin: true,
      isGuest: false,
      isViewOnly: false,
      countryCode: 'IL',
      currentLanguage: 'en',
      timeFormat: '12H',
      timeZoneOffset: 3,
    },
    region: 'euc1',
    productKind: '10093110',
    app: { id: 10467866, clientId: 'e2cb1e6edb7864a2d824f59dfd0685f4' },
    appVersion: {
      id: 10943131,
      name: 'vue test',
      status: 'live',
      type: 'minor',
      versionData: {
        major: 1,
        minor: 9,
        patch: 0,
        number: 10,
        type: 'minor',
        displayNumber: 'v10',
      },
    },
   // boardId: 1647137427,
   // boardIds: [1647137427],
    boardId: 1661635292,
    boardIds: [1661635292],
    boardViewId: 32801439,
    viewMode: 'fullScreen',
    instanceId: 32801439,
    instanceType: 'board_view',
    workspaceId: 2460329,
    appFeature: { type: 'AppFeatureBoardView', name: 'Vue board view' },
    permissions: {
      approvedScopes: [
        'me:read',
        'boards:read',
        'docs:read',
        'workspaces:read',
        'users:read',
        'account:read',
        'updates:read',
        'assets:read',
        'tags:read',
        'teams:read',
        'webhooks:read',
      ],
      requiredScopes: [
        'me:read',
        'boards:read',
        'docs:read',
        'workspaces:read',
        'users:read',
        'account:read',
        'updates:read',
        'assets:read',
        'tags:read',
        'teams:read',
        'webhooks:read',
      ],
    },
  }
  return res
}
export function getDummyBoardItems(boardid) {

  const res = {
  "data": {
    "boards": [
      {
        "items_page": {
          "items": [
            {
              "name": "Pivoting the Growth Galaxy - dev only",
              "id": "2066731819",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "gil elazar, Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Growth Galaxy"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "4"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-30"
                }
              ],
              "subitems": [
                {
                  "name": "Updated First Star Visual - dev",
                  "id": "2066734756",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Ready For Code Review"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Personal Growth Exercise - dev",
                  "id": "2066736577",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Ready For Code Review"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Reward Pop-Up: +5 Energy - dev",
                  "id": "2066743501",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Ready For Code Review"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Unlocking Next Exercises - dev",
                  "id": "2066745211",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Ready For Code Review"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "סידורי אנליטיקס - חלק ב׳",
              "id": "2048585126",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "gil elazar"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "2"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Monetization"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-27"
                }
              ],
              "subitems": [
                {
                  "name": "Daily Active User Streak 📊 - לסדר בדשבורד מסודר",
                  "id": "2048585336",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-27"
                    }
                  ]
                },
                {
                  "name": "Retention Rates 📊 - לסדר בדשבורד מסודר",
                  "id": "2048585468",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-27"
                    }
                  ]
                },
                {
                  "name": "עדכוני דרכי הצגה - DAU/WAU/MAU 📊",
                  "id": "2048626035",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Working in Progress"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "עדכוני דרכי הצגה - Retention 📊",
                  "id": "2048640717",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "עדכוני דרכי הצגה - Active Streak Days 📊",
                  "id": "2048640598",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "App Icon Update",
              "id": "2071242521",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "gil elazar"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "xS"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Where We At? 🕵️‍♂️"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-30"
                }
              ],
              "subitems": []
            },
            {
              "name": "Idea Forge Onboarding",
              "id": "2000151277",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "L"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "8"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨design - Step 1 Linen locker",
                  "id": "2004425872",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-16"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻 development - Step 1 Linen locker",
                  "id": "2004426127",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Working in Progress"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨design - Step 2 Merge Mechanic",
                  "id": "2004454093",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-15"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻 development - Step 2 Merge Mechanic",
                  "id": "2004454809",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨design - Step 3 Selling item",
                  "id": "2004471906",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-16"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻 development - Step 3 Selling item",
                  "id": "2004472017",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "New Set of 5 Idea Items | ״The Growth Cycle״ set",
              "id": "1978388823",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Anastasia Kostyuk, gil elazar"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "xL"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "8"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-30"
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design one idea item",
                  "id": "1978388910",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Design one idea item",
                  "id": "1978422746",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Design one idea item",
                  "id": "1978422415",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Design one idea item",
                  "id": "1978422313",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Design one idea item",
                  "id": "1978422117",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🎨Design one idea item",
                  "id": "2066919628",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-29"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻Development",
                  "id": "1978388897",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Ready For Code Review"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-27"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Idea forge Quest #4",
              "id": "2037600686",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "2"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-30"
                }
              ],
              "subitems": [
                {
                  "name": "🎨 Design",
                  "id": "2037600710",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-30"
                    }
                  ]
                },
                {
                  "name": "🛠️ Dev",
                  "id": "2037600724",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-30"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Idea forge Quest #5",
              "id": "2037609519",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "2"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-30"
                }
              ],
              "subitems": [
                {
                  "name": "🎨 Design",
                  "id": "2037609528",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-30"
                    }
                  ]
                },
                {
                  "name": "🛠️ Dev",
                  "id": "2037609530",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-30"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Idea forge Quest #6",
              "id": "2037609438",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "2"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-30"
                }
              ],
              "subitems": [
                {
                  "name": "🎨 Design",
                  "id": "2037609474",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "🛠️ Dev",
                  "id": "2037609487",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Item Highlight",
              "id": "1994923686",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Anastasia Kostyuk, Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Wait"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "1"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Item Highlight design",
                  "id": "1978455665",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-07-21"
                    }
                  ]
                },
                {
                  "name": "💻 Dev",
                  "id": "1994930927",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Wait"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Merge Animation - only Animation",
              "id": "2037590721",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Anastasia Kostyuk"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Story"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "4"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Animation",
                  "id": "2037594136",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Working in Progress"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Zen Zone first Plant Acquisition - Part 2",
              "id": "2025913237",
              "column_values": [
                {
                  "column": {
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "title": "Assigned"
                  },
                  "text": "Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "title": "Story Points"
                  },
                  "text": "L"
                },
                {
                  "column": {
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": "8"
                },
                {
                  "column": {
                    "title": "Done Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "title": "Goal Category"
                  },
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-07-30"
                }
              ],
              "subitems": [
                {
                  "name": "💻 Idea Box Trigger",
                  "id": "1996875861",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "💻 New Idea Box to Merge",
                  "id": "1996890121",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": ""
                    },
                    {
                      "column": {
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
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
  return res
}
