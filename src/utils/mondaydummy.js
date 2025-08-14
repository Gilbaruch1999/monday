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
   //boardId: 1647137427,
   //boardIds: [1647137427],
    boardId: 1647137427,
    boardIds: [1647137427],
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
              "name": "הוצאת גרסת ספרינט 22 - הגרסה הקודמת",
              "id": "2094069078",
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
                  "text": "gil elazar, Nir Katzir"
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
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
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
                  "text": "2025-08-13"
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "אפל",
                  "id": "2095293441",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                  "name": "אנדרואיד",
                  "id": "2095293521",
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
                      "text": "2025-08-13"
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
                  "text": "Work In Progress"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
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
                  "name": "עדכון הקוד כדי שיהיה אפשר להציג על פי הבקשה",
                  "id": "2087749055",
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
                      "text": "Not selected yet"
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
                      "text": "2025-08-07"
                    }
                  ]
                },
                {
                  "name": "נסיון להבין מה זה אומר(not set) שמופיע באנאליטיקס",
                  "id": "2087749116",
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
                      "text": "Not selected yet"
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
                  "name": "בדיקה שהנתונים עוברים בצורה חלקה וכל הנתונים מגיעים ליעד שלהם",
                  "id": "2087749224",
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
                      "text": "Not selected yet"
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
                      "text": "S"
                    },
                    {
                      "column": {
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-08-10"
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
                }
              ]
            },
            {
              "name": "Intro Dialogue Flow - dev only (Lean)",
              "id": "2080978453",
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
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "title": "Points"
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-08-11"
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "ליצור את הבועה של הדיאלוג",
                  "id": "2092289491",
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
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
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
                      "text": "2025-08-11"
                    }
                  ]
                },
                {
                  "name": "להוסיף את כל המשפטים לתוך דאטא בייס",
                  "id": "2092289596",
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
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
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
                      "text": "2025-08-11"
                    }
                  ]
                },
                {
                  "name": "לדאוג שכל לחיצה מקדמה אותנו למשפט הבא",
                  "id": "2092289875",
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
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
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
                      "text": "2025-08-11"
                    }
                  ]
                },
                {
                  "name": "להוסיף כפתור skip שידלג על כל המשפטים",
                  "id": "2092290023",
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
                      "text": "Done"
                    },
                    {
                      "column": {
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
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
                      "text": "2025-08-11"
                    }
                  ]
                }
              ]
            },
            {
              "name": "🌱Zen Zone onboarding - Part A",
              "id": "2030602388",
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
                  "text": "Katerina, Nir Katzir"
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
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "title": "Points"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨Onboarding Entry - Intro & Seed Narrative",
                  "id": "2047509755",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Katerina"
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
                      "text": "2025-08-11"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻Onboarding Entry - Intro & Seed Narrative",
                  "id": "2047557625",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                  "name": "🎨Unlocking the Dreambloom",
                  "id": "2047564905",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Katerina"
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
                      "text": "2025-08-11"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻 Unlocking the Dreambloom",
                  "id": "2047565052",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                },
                {
                  "name": "Popup \"Your first seed\"",
                  "id": "2093502049",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Katerina"
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
                      "text": "2025-08-11"
                    }
                  ]
                }
              ]
            },
            {
              "name": "🌱Zen Zone onboarding - Part B",
              "id": "2048404417",
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
                  "text": "Katerina, Nir Katzir"
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
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "title": "Points"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨Returning to Merge Board",
                  "id": "2048404433",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Katerina"
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
                      "text": "2025-08-12"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻 Returning to Merge Board",
                  "id": "2048404434",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                  "name": "🎨Place & Use Dreambloom Item (Include Basic animation)",
                  "id": "2048404437",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Katerina"
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
                      "text": "2025-08-13"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻Place & Use Dreambloom Item",
                  "id": "2048404439",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                }
              ]
            },
            {
              "name": "Idea forge Quest #7",
              "id": "2074439266",
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
                  "text": "xS"
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-08-10"
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨 Design",
                  "id": "2074439317",
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
                      "text": "2025-08-13"
                    }
                  ]
                },
                {
                  "name": "🛠️ Dev",
                  "id": "2074439334",
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
                      "text": "2025-08-13"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Idea forge Quest #8",
              "id": "2074448653",
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
                  "text": "xS"
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": "2025-08-10"
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨 Design",
                  "id": "2074448702",
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
                      "text": "2025-08-13"
                    }
                  ]
                },
                {
                  "name": "🛠️ Dev",
                  "id": "2074448718",
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
                      "text": "2025-08-13"
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
                  "text": "Yair Klausner"
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Code Review Me"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
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
                }
              ]
            },
            {
              "name": "Full Game Reset in Dev Panel",
              "id": "2074555419",
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
                    "title": "Domain"
                  },
                  "text": "Dev Panel"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
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
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "סיום תיקון באג ריסט ideaforage",
                  "id": "2098304104",
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
                      "text": "Not selected yet"
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
                  "name": "הוספת ריסט zenzone",
                  "id": "2098304497",
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
                      "text": "Not selected yet"
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
                  "name": "הוספת ריסט coins",
                  "id": "2098304758",
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
                      "text": "Not selected yet"
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
                  "name": "הוספת כפתור הוספת energy",
                  "id": "2098305632",
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
                      "text": "Not selected yet"
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
                  "name": "הוספת כפתור הוספת coins",
                  "id": "2098306211",
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
                      "text": "Not selected yet"
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
                  "name": "איגוד כל הריסטים תחת כפתור אחד שיהיה בפאנל ניהול שיעשה ריסט להכל",
                  "id": "2098307479",
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
                      "text": "Not selected yet"
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
              "name": "Merge Animation - Implement",
              "id": "2071209571",
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
                  "text": "Nir Katzir, Anastasia Kostyuk"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "Cleanup",
                  "id": "2092347165",
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
                      "text": "2025-08-13"
                    }
                  ]
                },
                {
                  "name": "Implement",
                  "id": "2071209609",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
              "name": "\"Wisdom Quote\" Screen",
              "id": "1994924479",
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
                  "text": "Katerina, Yair Klausner"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Personal Development"
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
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨\"Wisdom Quote\" Design",
                  "id": "1978435358",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Katerina"
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
                      "text": "2025-08-13"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻\"Wisdom Quote\" get quate from DB logic",
                  "id": "1994951046",
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
                  "name": "🧑‍💻Create Data Base of Quotes",
                  "id": "2009217214",
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
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Sell Items from the Merge Board",
              "id": "2047631627",
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
                  "text": "Katerina, Yair Klausner"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨Visual Design of the Sell Mechanism",
                  "id": "2047642466",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Katerina"
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
                      "text": "2025-08-13"
                    }
                  ]
                },
                {
                  "name": "🧑‍💻 Implement Item Selling from Merge Board",
                  "id": "2047642588",
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
                  "name": "Design integration",
                  "id": "2099235959",
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
                      "text": "Not selected yet"
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
              "name": "Passive Merge Hint Animation",
              "id": "2037595299",
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
                  "text": "Nir Katzir"
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
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "Animation",
                  "id": "2037596155",
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
                      "text": "Removed"
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
                      "text": "Not selected yet"
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
                  "name": "Implement",
                  "id": "2037596668",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
              "name": "Pre-Game Loading Screen Animation Implementation",
              "id": "2070764876",
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
                  "text": "General"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Personal Development"
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
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨Redesign the Initial Loading Screen",
                  "id": "2070767704",
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
                  "name": "🎨Animate Elements of the Loading Screen",
                  "id": "2070767715",
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
                  "name": "🧑‍💻 Implement the New Loading Screen",
                  "id": "2070767711",
                  "column_values": [
                    {
                      "column": {
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
              "name": "Idea Forge Onboarding - code review",
              "id": "2092301302",
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
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "title": "Points"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
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
                  "text": "2025-08-11"
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": []
            },
            {
              "name": "Sell Items from the Merge Board - animation",
              "id": "2092351837",
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
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
                  "text": "How Many Coffees Do I need? ☕"
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
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "🎨Feedback & Reward Animation",
                  "id": "2047670429",
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
                      "text": "Not selected yet"
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
                  "name": "🧑‍💻Feedback & Reward Animation",
                  "id": "2047670832",
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
                      "text": "Not selected yet"
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
              "name": "⚡Dev Panel: Reduce Energy Tool",
              "id": "2037799821",
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
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
                  "text": "How Many Coffees Do I need? ☕"
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
                  "text": ""
                },
                {
                  "column": {
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
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
                },
                {
                  "column": {
                    "title": "Planning State"
                  },
                  "text": "New"
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

  return res
}
