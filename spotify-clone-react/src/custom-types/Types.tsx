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

export type PropsUserPreview = {
    user: User | null
  } 

export type Playlist = {
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    id: string;
    images: Array<{
      url: string;
      height: number | null;
      width: number | null;
    }>;
    name: string;
    owner: {
      display_name: string;
      external_urls: {
        spotify: string;
      };
      href: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      total: number;
    };
    type: string;
    uri: string;
  };