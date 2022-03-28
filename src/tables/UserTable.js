import React from 'react'

const UserTable = props => (
    <table>
        <thead>
        <tr>
            <th>姓名</th>
            <th>账号</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRow(user)
                            }}
                            className="button muted-button"
                        >
                            修改
                        </button>
                        <button
                            onClick={() => props.deleteUser(user.id)}
                            className="button muted-button"
                        >
                            删除
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No users</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default UserTable
