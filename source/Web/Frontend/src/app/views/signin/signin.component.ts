import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AppAuthService } from "src/app/services/auth.service";

@Component({ selector: "app-signin", templateUrl: "./signin.component.html" })
export class AppSignInComponent {
    form = this.formBuilder.group({
        login: ["admin", Validators.required],
        password: ["admin", Validators.required]
    });

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly appAuthService: AppAuthService) {
    }

    signIn() {
        this.appAuthService.signIn(this.form.value);
    }
}
