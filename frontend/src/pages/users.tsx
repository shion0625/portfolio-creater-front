import { Box, Paper } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import PrimarySearchAppBar from '~/components/NavBar'
import { UserPagination, User } from '~/models/types'
import { GetUsersNameServer } from '~/repositories/user'

type Props = {
  users: UserPagination
}

const Users: NextPage<Props> = ({ users }) => {
  const { data: session, status } = useSession()

  return (
    <>
      <PrimarySearchAppBar />
      <Box component='main' sx={{ m: 2 }}>
        <p>ユーザの一覧</p>
        {users?.nodes.map((user: User) => {
          return (
            <div key={user.id}>
              <Link href={`/users/${user.id}`}>
                <Paper elevation={3} sx={{ m: 2, py: 2, fontSize: 18 }}>
                  <a>{user.name}</a>
                </Paper>
              </Link>
              {session?.user?.id == user.id && <Link href={`/users/${user.id}/Edit`}>編集</Link>}
            </div>
          )
        })}
      </Box>
    </>
  )
}

export default Users

export const getStaticProps: GetStaticProps = async () => {
  const { users } = await GetUsersNameServer()
  return {
    props: { users: users },
    revalidate: 1,
  }
}
