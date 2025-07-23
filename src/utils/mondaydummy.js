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
  console.log('Boardid ' + boardid)
  const res = {
    boards: [
      {
        items_page: {
          items: [
            {
              name: 'Fix multiple item sale bugs in Idea Forge',
              id: '2049312535',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Yair Klausner',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Yair Klausner',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Done',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Bug',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'M',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '4',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Disruptions',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '2025-07-22',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [],
            },
            {
              name: 'Disable Idea Forge Upgrades Post-Truck Level',
              id: '2004056999',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Yair Klausner',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Yair Klausner',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Done',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Bug',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'xS',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '1',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Disruptions',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '2025-07-21',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [],
            },
            {
              name: 'Resident Buys Towel L4',
              id: '1973984755',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Katerina, gil elazar',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'gil elazar, Katerina',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Work In Progress',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨Design L4 Sell Flow',
                  id: '1973985434',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-13',
                    },
                  ],
                },
                {
                  name: '🛠️Detect L4 Match',
                  id: '1973985509',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🛠️Handle L4 Sale',
                  id: '1973985544',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Resident Buys 3 Towel L5',
              id: '1973998295',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Katerina, gil elazar',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'gil elazar, Katerina',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Work In Progress',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨Upgrade Visuals to sell 3 L5 Towels',
                  id: '1973998394',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'DoneDate',
                      },
                      text: '2025-07-22',
                    },

                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨Partial Order State',
                  id: '1974006412',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🛠️Detect L5 Match',
                  id: '1974003463',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🛠️Handle L5 Sale',
                  id: '1974005925',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🛠️Handle Partial Orders',
                  id: '1974121893',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'להוציא גרסה ליוזרים',
              id: '2048612267',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Nir Katzir',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Pending - ToDo',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'Not selected yet',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'General',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Team Development',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [],
            },
            {
              name: 'Zen Zone first Plant Acquisition - Part 1',
              id: '1996719895',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Nir Katzir, Katerina',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Nir Katzir, Katerina',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Work In Progress',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'xL',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Zen Zone',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '16',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨Zen Zone Nudge',
                  id: '1996739908',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-14',
                    },
                  ],
                },
                {
                  name: '💻Zen Zone Nudge',
                  id: '1996739357',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Nir Katzir',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-15',
                    },
                  ],
                },
                {
                  name: '🎨Zen Zone Layout',
                  id: '1996768548',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xL',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-16',
                    },
                  ],
                },
                {
                  name: '💻Zen Zone Unlocks',
                  id: '1996769914',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Nir Katzir',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Working in Progress',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xL',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨Zen Upgrade Icon',
                  id: '1996797033',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'S',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-16',
                    },
                  ],
                },
                {
                  name: '💻 Icon State Logic',
                  id: '1996797314',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-17',
                    },
                  ],
                },
                {
                  name: '🎨Cost Pop-up Display',
                  id: '1996809048',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-17',
                    },
                  ],
                },
                {
                  name: '💻 Dynamic Purchase Check',
                  id: '1996809165',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨  Dream Bloom Reveal',
                  id: '1996820953',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-20',
                    },
                  ],
                },
                {
                  name: '💻 Plant Growth & Sound',
                  id: '1996821051',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Zen Zone first Plant Acquisition - Part 2',
              id: '2025913237',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Nir Katzir',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Pending - ToDo',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'L',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '8',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '💻 Idea Box Trigger',
                  id: '1996875861',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '💻 New Idea Box to Merge',
                  id: '1996890121',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'סידורי אנליטיקס - חלק ב׳',
              id: '2048585126',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'gil elazar',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'gil elazar',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Work In Progress',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'General',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Monetization',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: 'Daily Active User Streak 📊 - לסדר בדשבורד מסודר',
                  id: '2048585336',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'gil elazar',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Ready For Review by The PO',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Task',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: 'Retention Rates 📊 - לסדר בדשבורד מסודר',
                  id: '2048585468',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'gil elazar',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Working in Progress',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Task',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: 'עדכוני דרכי הצגה - DAU/WAU/MAU 📊',
                  id: '2048626035',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Task',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: 'עדכוני דרכי הצגה - Active Streak Days 📊',
                  id: '2048640598',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Task',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: 'עדכוני דרכי הצגה - Retention 📊',
                  id: '2048640717',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Task',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'להתחיל מה-idea forge במקום מהgg',
              id: '2038154693',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Nir Katzir',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Nir Katzir',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Done',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Story',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'General',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Vision',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '2025-07-16',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [],
            },
            {
              name: 'Idea Forge Onboarding',
              id: '2000151277',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'gil elazar, Katerina',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Pending - ToDo',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'L',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '8',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'User Needs',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨design - Step 1 Linen locker',
                  id: '2004425872',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'S',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-16',
                    },
                  ],
                },
                {
                  name: '🧑‍💻 development - Step 1 Linen locker',
                  id: '2004426127',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨design - Step 2 Merge Mechanic',
                  id: '2004454093',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-15',
                    },
                  ],
                },
                {
                  name: '🧑‍💻 development - Step 2 Merge Mechanic',
                  id: '2004454809',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨design - Step 3 Selling item',
                  id: '2004471906',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-16',
                    },
                  ],
                },
                {
                  name: '🧑‍💻 development - Step 3 Selling item',
                  id: '2004472017',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'New Set of 5 Idea Items | ״The Growth Cycle״ set',
              id: '1978388823',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Anastasia Kostyuk, gil elazar',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Wait',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'xL',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '16',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨Design one idea item',
                  id: '1978388910',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨Design one idea item',
                  id: '1978422746',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨Design one idea item',
                  id: '1978422415',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨Design one idea item',
                  id: '1978422313',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🎨Design one idea item',
                  id: '1978422117',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🧑‍💻Development',
                  id: '1978388897',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Merge Animation',
              id: '2037590721',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Anastasia Kostyuk, Nir Katzir',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Work In Progress',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'M',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '4',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Vision',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: 'Animation',
                  id: '2037594136',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Working in Progress',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'S',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: 'Implement',
                  id: '2037594340',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Idea forge Quest #4',
              id: '2037600686',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Katerina, gil elazar',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Pending - ToDo',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨 Design',
                  id: '2037600710',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🛠️ Dev',
                  id: '2037600724',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Idea forge Quest #5',
              id: '2037609519',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Katerina, gil elazar',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Pending - ToDo',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨 Design',
                  id: '2037609528',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🛠️ Dev',
                  id: '2037609530',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Idea forge Quest #6',
              id: '2037609438',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Katerina, gil elazar',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Pending - ToDo',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨 Design',
                  id: '2037609474',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'xS',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🛠️ Dev',
                  id: '2037609487',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'Not selected yet',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Item Highlight',
              id: '1994923686',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Anastasia Kostyuk, Nir Katzir',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Anastasia',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Wait',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'M',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '1',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨Item Highlight design',
                  id: '1978455665',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'S',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-21',
                    },
                  ],
                },
                {
                  name: '💻 Dev',
                  id: '1994930927',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Wait',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: '💡📦Design New Idea Box - Inspiration Stash box',
              id: '1985778684',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Katerina, Nir Katzir',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Katerina',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Wait',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'L',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Idea Forge',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '8',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'Game Content',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '',
                },
              ],
              subitems: [
                {
                  name: '🎨Design',
                  id: '1985778746',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: 'Katerina',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-20',
                    },
                  ],
                },
                {
                  name: '🧑‍💻development',
                  id: '1985778773',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Wait',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
                {
                  name: '🧑‍💻Embed the Idea Box',
                  id: '1985778789',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Pending - ToDo',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'M',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '',
                    },
                  ],
                },
              ],
            },
            {
              name: 'Star Progress Map Indicators',
              id: '1996585982',
              column_values: [
                {
                  column: {
                    title: 'Subitems',
                  },
                  text: null,
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Anastasia Kostyuk, Nir Katzir',
                },
                {
                  column: {
                    title: 'Assigned',
                  },
                  text: 'Anastasia',
                },
                {
                  column: {
                    title: 'Status',
                  },
                  text: 'Done',
                },
                {
                  column: {
                    title: 'Issue Type',
                  },
                  text: 'Epic',
                },
                {
                  column: {
                    title: 'Story Points',
                  },
                  text: 'S',
                },
                {
                  column: {
                    title: 'Domain',
                  },
                  text: 'Growth Galaxy',
                },
                {
                  column: {
                    title: 'Points',
                  },
                  text: '2',
                },
                {
                  column: {
                    title: 'Done Points',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Strategic Category',
                  },
                  text: 'User Needs',
                },
                {
                  column: {
                    title: 'DoneDate',
                  },
                  text: '2025-07-17',
                },
                {
                  column: {
                    title: 'Date',
                  },
                  text: '',
                },
                {
                  column: {
                    title: 'Date 1',
                  },
                  text: '2025-07-22',
                },
              ],
              subitems: [
                {
                  name: '🎨design',
                  id: '1996597345',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'S',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-22',
                    },
                  ],
                },
                {
                  name: '🧑‍💻 development',
                  id: '1996599657',
                  column_values: [
                    {
                      column: {
                        title: 'Assigned',
                      },
                      text: '',
                    },
                    {
                      column: {
                        title: 'Status',
                      },
                      text: 'Done',
                    },
                    {
                      column: {
                        title: 'Issue Type',
                      },
                      text: 'Story',
                    },
                    {
                      column: {
                        title: 'Story Points',
                      },
                      text: 'S',
                    },
                    {
                      column: {
                        title: 'SubItemDoneDate',
                      },
                      text: '2025-07-22',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  }

  return res
}
