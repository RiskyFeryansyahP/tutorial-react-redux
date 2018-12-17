export interface RootReducerType {
    posts : {
        posts : ItemPost[]
    }
}

export interface Posts {
    posts : {
        posts : ItemPost[]
    }
}

export interface ItemPost {
    id : string
    title : string
    body : string
}