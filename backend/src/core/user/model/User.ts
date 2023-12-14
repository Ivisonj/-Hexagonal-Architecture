import EmailFormat from "@/core/shared/EmailFormat"
import Id from "@/core/shared/Id"
import NameFormat from "@/core/shared/NameFormat"
import PasswordFormat from "@/core/shared/PasswordFormat"

export default interface User {
    id?: string
    name: string
    email: string
    password: string
}

// export default class User {
//     readonly id: Id
//     readonly name: NameFormat
//     readonly email: EmailFormat
//     readonly password: PasswordFormat

//     constructor(props: UserProps) {
//         this.id = (props.id)
//         this.name = new NameFormat(props.name!, 3, 100)
//         this.email = new EmailFormat(props.email)
//         this.password = new PasswordFormat(props.password!, 3, 20)
//     }
// }