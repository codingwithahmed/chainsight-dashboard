import React from 'react'


const data = {
    headers : ['Product','lopo','Info','GPU'],
    columns : [[
        'DFS', 'DFAS', 'FSAD' , 'asd'
    ],[
        'DFS', 'DFAS', 'FSAD' , 'asd'
    ],
    [
        'DFS', 'DFAS', 'FSAD' , 'asd'
    ],
    [
        'DFS', 'DFAS', 'FSAD' , 'asd','as'
    ]]
}

export default function Table({
    headers,
    columns
}) {
  return (
    <table class="w-full max-h-52 overflow-y-scroll text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>

            {
             headers ?  headers.map(e =>  <th scope="col" class="px-6 py-3">
                {e}
            </th>) : ''
            }
            
            
        </tr>
    </thead>
    <tbody>

        {
            columns.map(e =>  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
           
           { e ?  e.map((d,i) => i == 0 ? <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {d}
            </th> :  <td class="px-6 py-4">
                {d}
            </td> ) : '' }
            
            
            
        </tr>)
        }

        

    </tbody>
</table>
  )
}
