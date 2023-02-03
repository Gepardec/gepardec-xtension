import {FileUploadTestComponent} from "./file-upload-test.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('FileUploadTestComponent', () => {
  it('mounts', () => {
    cy.mount(FileUploadTestComponent, {
      imports: [MatSnackBarModule]
    })

    cy.contains("Dateiname")
  })
})
