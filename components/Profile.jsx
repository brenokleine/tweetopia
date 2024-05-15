'use client'

import Image from "next/image"
import PostCard from "./PostCard"
import { Avatar, Divider } from "@chakra-ui/react"

const Profile = ({ user, desc, image, data, handleEdit, handleDelete }) => {
  return (
      <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center w-full justify-start">
              <div className="mr-4">
                  <Avatar size="xl" src={image} />
              </div>
              <div>
                  <h1 className="text-2xl font-bold">@{user.username}</h1>
                  <p className="text-gray-600">{desc}</p>
                  <p className="text-gray-600 text-sm">Joined: {user.joined ? user.joined : '- - -'}</p>
              </div>
          </div>
          <div className="w-full">
              <Divider  />
          </div>
          <div className='flex gap-6 flex-wrap justify-center'>
              {data.map((post) => (
                  <PostCard
                      key={post._id}
                      post={post}
                      //tag click here
                      handleEdit={() => handleEdit && handleEdit(post)}
                      handleDelete={() => handleDelete && handleDelete(post)}
                  />
              ))}
          </div>
      </div>
  )
}

export default Profile