import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  UserListContainer,
  User,
  UserImg,
  EditUser,
  DeleteUser
} from "./UserList.styled";


const UserList = () => {
  const [data, setData] = useState([]);                     {/* TODO USE REAL DATA FROM DB */}

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "username",
      headerName: "User",
      flex: 3,

      renderCell: (params) => {
        return (
          <User>
            <UserImg src={params.row.avatar} alt="" />
            {params.row.username}
          </User>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 3,

    },
    {
      field: "status",
      headerName: "Status",
      flex: 3,
  
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      flex: 3,

    },
    {
      field: "action",
      headerName: "Action",
      flex: 3,

      renderCell: (params) => {
        return (
            <>
                <EditUser to={"/user/" + params.row.id}>
                  Edit
                </EditUser>
                <DeleteUser>
                    <DeleteOutline
                      onClick={() => handleDelete(params.row.id)}
                    />
                </DeleteUser>    
                
          </>
        );
      },
    },
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </UserListContainer>
  );
}

export default UserList;