import {InlineTextEditorTestComponent} from "./inline-text-editor-test.component";

describe('InlineTextEditorTestComponent', () => {
  it('mounts', () => {
    cy.mount(InlineTextEditorTestComponent)

    cy.get(".container")
      .should("contain", "gepardec-xtension")
  })
})
