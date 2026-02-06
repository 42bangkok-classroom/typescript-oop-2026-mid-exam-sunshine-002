import axios from 'axios'
interface FullAlbum {
  userId: number
  id: number
  title: string
  photos: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumnaiUrl: string;
  }[]
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
    if(userIds === null || userIds?.length === 0) {
        return new Promise(resolve => resolve([]))
    }
    try {
        const [photos, albums] = await Promise.all([axios.get(PHOTOS_URL), axios.get(ALBUMS_URL)])
        const photo = photos.data
        const album = albums.data
        const merge = album.map((a: any) => {
            const ifphoto = photo.filter((p: any) => p.albumId === a.id)
            return {
                ...a,
                photos: ifphoto
            }
        }).filter((a: any) => {
            return userIds && userIds.includes(a.userId)
        })
        return merge
    } catch {
        return new Promise(resolve => resolve([]))
    }
}
