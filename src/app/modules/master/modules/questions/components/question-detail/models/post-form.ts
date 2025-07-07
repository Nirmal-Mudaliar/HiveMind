import { FormControl } from "@angular/forms";

export interface PostForm {
  id: FormControl<string | null>,
  title: FormControl<string | null>,
  description: FormControl<string | null>,
  lastModifiedDate: FormControl<string | null>,
}

export interface PostFormValue {
  id: string,
  title: string,
  description: string,
  lastModifiedDate: string,
}