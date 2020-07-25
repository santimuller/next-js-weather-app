context('Test end to end integration', () => {
  before(() => {
    cy.visit(`http://localhost:3000/`)
  })

  beforeEach(() => {
    cy.request('http://ip-api.com/json/?fields=countryCode,city,regionName,lat,lon,country').as('ip-api');
    cy.request('https://api.openweathermap.org/data/2.5/onecall?lat=48.898899&lon=2.093800&units=metric&exclude=minutely,hourly&lang=es&appid=f60a3fa29fa6e36b1e27fdcdc033d25d').as('onecall-api');
  })

  it('ip-api should be return status code 200', () => {
    cy.get('@ip-api').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  
  it('Should be return the following fields: countryCode,city,regionName,lat,lon,country', () => {
    cy.get('@ip-api').then((response) => {
      expect(response.body).to.have.property('country')
      expect(response.body).to.have.property('city')
      expect(response.body).to.have.property('lat')
      expect(response.body).to.have.property('lon')
      expect(response.body).to.have.property('countryCode')
    })
  })
  
  it('onecallapi should be return status code 200', () => {
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('City should be the same value of ip-api response', () => {
    cy.get('@ip-api').then((response) => {
      cy.get('[data-testid="bg-default"]').contains(response.body.city) 
    })
  })

  it('onecallapi should be return current and daily data', () => {
    cy.get('@onecall-api').then((response) => {
      expect(response.body).to.have.property('current')
      expect(response.body).to.have.property('daily')
    })
  })
  
  it('Check if cards have the correct background', () => {
    cy.get('[data-testid="bg-default"]').should('have.class', 'bg-default')
    cy.get('[data-testid="bg-roma"]').should('have.class', 'bg-roma')
    cy.get('[data-testid="bg-new-york"]').should('have.class', 'bg-new-york')
    cy.get('[data-testid="bg-barcelona"]').should('have.class', 'bg-barcelona')
    cy.get('[data-testid="bg-paris"]').should('have.class', 'bg-paris')
    cy.get('[data-testid="bg-tokio"]').should('have.class', 'bg-tokio')
  })

  it('Should redirect to /clima', () => {
    cy.get('[data-testid="bg-new-york"]').click()
    cy.url().should('include', '/clima')
  })

  it('/clima should have the correct queryParams', () => {
    cy.location().should((loc) => {
      expect(loc.search).to.eq('?lat=40.758896&lon=-73.985130&region=New%20York,%20Estados%20Unidos')
    })
  })

  it('External Img of weatherAPI should be visible', () => {
    cy.get('[data-testid="external-img"]').should('be.visible')
  })

  it('Should add back icon in header', () => {
    cy.get('header span').should('have.class', 'mdi-arrow-left')
  })
})