import { JSX } from "react"

export type User = {
    name: string | null,
    email: string | null,
    isPremium: string | null,
    profilePic: string | null
}

export type UserToken = {
    token: string
} | string | null

export type Children = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

export type TokenContext = string | null;