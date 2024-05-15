'use client'

import Image from "next/image"
import PostCard from "./PostCard"
import { Divider } from "@chakra-ui/react"

const Profile = ({ userName, desc, image, data, handleEdit, handleDelete }) => {
  return (
      <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center w-full justify-start">
              <div className="mr-4">
                  <Image src={image} className='rounded-full' alt="user" width={100} height={100} />
              </div>
              <div>
                  <h1 className="text-2xl font-bold">@{userName}</h1>
                  <p className="text-gray-600">{desc}</p>
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
                      
                      handleEdit={() => { }}
                      handleDelete={() => { }}
                  />
              ))}
          </div>
      </div>
  )
}

export default Profile