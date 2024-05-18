'use client'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import PostCard from './PostCard'

const DeletePostModal = ({ isOpen, onClose, onDelete, post }) => {
  return (
      <div >
          <Modal
              isOpen={isOpen}
              onClose={onClose}
              isCentered
              motionPreset='scale'
              size={'xl'}
          >
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>Are you sure to delete this post?</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody
                    display={'flex'}
                    justifyContent={'center'}
                  >
                      <PostCard 
                        post={post} 
                        isDeleteConfirmation={true}
                    />
                  </ModalBody>

                  <ModalFooter>
                      <Button colorScheme='red' mr={3} onClick={onDelete}>
                          Delete Post
                      </Button>
                      <Button variant='ghost' colorScheme='green' onClick={onClose}>
                          Cancel
                      </Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
      </div>
  )
}

export default DeletePostModal