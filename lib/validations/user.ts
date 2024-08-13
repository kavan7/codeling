import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {message: 'Your name must be at least 3 characters'}).max(30, {message: 'Your name must be no longer than 30 characters.'}),
    username: z.string().min(3, {message: 'Your username must be at least 3 characters'}).max(30, {message: 'Your username must be no longer than 30 characters.'}),
  
})