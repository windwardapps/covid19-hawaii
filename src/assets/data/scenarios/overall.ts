export interface OverallScenario {
  name: string
  containmentScenario: string
  epidemiologicalScenario: string
  populationScenario: string
}

const globalScenarios: OverallScenario[] = [
  {
    name: 'Hawaii',
    containmentScenario: 'Moderate mitigation',
    epidemiologicalScenario: 'Moderate/Tropical',
    populationScenario: 'Hawaii',
  },
  {
    name: 'Default',
    containmentScenario: 'Moderate mitigation',
    epidemiologicalScenario: 'Moderate/North',
    populationScenario: 'CH-Basel-Stadt',
  },
  {
    name: 'Country - no mitigation',
    containmentScenario: 'No mitigation',
    epidemiologicalScenario: 'Moderate/North',
    populationScenario: 'Germany',
  },
  {
    name: 'City - strong mitigation',
    containmentScenario: 'Strong mitigation',
    epidemiologicalScenario: 'Moderate/North',
    populationScenario: 'SE-Stockholm',
  },
]

export default globalScenarios
