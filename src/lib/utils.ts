import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Style utils
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// String utils
export const replaceUrlFn = (
	url: string,
	replaceUrl: { [key: string]: string | number }
) => {
	const splittedUrl = url.split('/')

	return splittedUrl
		.map(part => {
			if (part.startsWith(':')) {
				const key = part.slice(1)
				return replaceUrl[key] ? String(replaceUrl[key]) : part
			}

			return part
		})
		.join('/')
}

// Local storage utils

export enum LocalStorageKeys {
	USER = 'USER-TOKEN',
}

export const setLocalStorageItem = (key: string, item: string) => {
	return localStorage.setItem(key, item)
}

export const getLocalStorageItem = (key: string) => {
	return localStorage.getItem(key)
}

export const removeLocalStorageItem = (key: string): void => {
	return localStorage.removeItem(key)
}

export const setLocalStorageObject = (key: string, item: Object) => {
	return localStorage.setItem(key, JSON.stringify(item))
}

export const getLocalStorageObject = (key: string) => {
	const obj = localStorage.getItem(key)
	return obj ? JSON.parse(obj) : {}
}

export const removeLocalStorageItems = (keys: string[]) => {
	keys.forEach(key => {
		localStorage.removeItem(key)
	})
}
