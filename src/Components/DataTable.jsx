import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

const DataTable = (props) => {
    
  return (
    <div>
      <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid className='bg-white'
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnFilter
      />
    </Box>
    </div>
  )
}

export default DataTable
