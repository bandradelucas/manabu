interface StatesObject {
  [key: string]: {
    id: number;
    name: string;
    fiscalRegionCode: string;
    region: {
      id: number;
      acronym: string;
      name: string;
    }
  }
}

export const STATES_DATA: StatesObject = {
  RO: {
    id: 11,
    name: 'Rondônia',
    fiscalRegionCode: '2',
    region: {
      id: 1,
      name: 'Norte',
      acronym: 'N',
    }
  },
  AC: {
    id: 12,
    name: 'Acre',
    fiscalRegionCode: '2',
    region: {
      id: 1,
      acronym: 'N',
      name: 'Norte'
    }
  },
  AM: {
    id: 13,
    fiscalRegionCode: '2',
    name: 'Amazonas',
    region: {
      id: 1,
      acronym: 'N',
      name: 'Norte'
    }
  },
  RR: {
    id: 14,
    name: 'Roraima',
    fiscalRegionCode: '2',
    region: {
      id: 1,
      acronym: 'N',
      name: 'Norte'
    }
  },
  PA: {
    id: 15,
    name: 'Pará',
    fiscalRegionCode: '2',
    region: {
      id: 1,
      acronym: 'N',
      name: 'Norte'
    }
  },
  AP: {
    id: 16,
    name: 'Amapá',
    fiscalRegionCode: '2',
    region: {
      id: 1,
      acronym: 'N',
      name: 'Norte'
    }
  },
  TO: {
    id: 17,
    name: 'Tocantins',
    fiscalRegionCode: '1',
    region: {
      id: 1,
      acronym: 'N',
      name: 'Norte'
    }
  },
  MA: {
    id: 21,
    name: 'Maranhão',
    fiscalRegionCode: '3',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  PI: {
    id: 22,
    name: 'Piauí',
    fiscalRegionCode: '3',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  CE: {
    id: 23,
    name: 'Ceará',
    fiscalRegionCode: '3',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  RN: {
    id: 24,
    name: 'Rio Grande do Norte',
    fiscalRegionCode: '4',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  PB: {
    id: 25,
    name: 'Paraíba',
    fiscalRegionCode: '4',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  PE: {
    id: 26,
    name: 'Pernambuco',
    fiscalRegionCode: '4',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  AL: {
    id: 27,
    name: 'Alagoas',
    fiscalRegionCode: '4',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  SE: {
    id: 28,
    name: 'Sergipe',
    fiscalRegionCode: '5',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  BA: {
    id: 29,
    name: 'Bahia',
    fiscalRegionCode: '5',
    region: {
      id: 2,
      acronym: 'NE',
      name: 'Nordeste'
    }
  },
  MG: {
    id: 31,
    name: 'Minas Gerais',
    fiscalRegionCode: '6',
    region: {
      id: 3,
      acronym: 'SE',
      name: 'Sudeste'
    }
  },
  ES: {
    id: 32,
    name: 'Espírito Santo',
    fiscalRegionCode: '7',
    region: {
      id: 3,
      acronym: 'SE',
      name: 'Sudeste'
    }
  },
  RJ: {
    id: 33,
    name: 'Rio de Janeiro',
    fiscalRegionCode: '7',
    region: {
      id: 3,
      acronym: 'SE',
      name: 'Sudeste'
    }
  },
  SP: {
    id: 35,
    name: 'São Paulo',
    fiscalRegionCode: '8',
    region: {
      id: 3,
      acronym: 'SE',
      name: 'Sudeste'
    }
  },
  PR: {
    id: 41,
    name: 'Paraná',
    fiscalRegionCode: '9',
    region: {
      id: 4,
      acronym: 'S',
      name: 'Sul'
    }
  },
  SC: {
    id: 42,
    name: 'Santa Catarina',
    fiscalRegionCode: '9',
    region: {
      id: 4,
      acronym: 'S',
      name: 'Sul'
    }
  },
  RS: {
    id: 43,
    name: 'Rio Grande do Sul',
    fiscalRegionCode: '0',
    region: {
      id: 4,
      acronym: 'S',
      name: 'Sul'
    }
  },
  MS: {
    id: 50,
    name: 'Mato Grosso do Sul',
    fiscalRegionCode: '1',
    region: {
      id: 5,
      acronym: 'CO',
      name: 'Centro-Oeste'
    }
  },
  MT: {
    id: 51,
    name: 'Mato Grosso',
    fiscalRegionCode: '1',
    region: {
      id: 5,
      acronym: 'CO',
      name: 'Centro-Oeste'
    }
  },
  GO: {
    id: 52,
    name: 'Goiás',
    fiscalRegionCode: '1',
    region: {
      id: 5,
      acronym: 'CO',
      name: 'Centro-Oeste'
    }
  },
  DF: {
    id: 53,
    name: 'Distrito Federal',
    fiscalRegionCode: '1',
    region: {
      id: 5,
      acronym: 'CO',
      name: 'Centro-Oeste'
    }
  }
}

export const STATES = Object.keys(STATES_DATA);