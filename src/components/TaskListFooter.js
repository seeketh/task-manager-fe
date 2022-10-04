// Handles Task list paging

const TaskListFooter = () => {

    return (

<div className="flex items-center justify-center border-t border-gray-200 bg-white py-3">

  <div className="sm:w-3/4 lg:w-1/2 w-full flex justify-between items-center">

    <div>
      <p className="text-sm text-gray-700">
        Showing 
        <span className="font-medium ml-1 mr-1">1</span>
        to
        <span className="font-medium ml-1 mr-1">5</span>
        of
        <span className="font-medium ml-1 mr-1">17</span>
        tasks.
      </p>
    </div>

    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Previous</span>
          {/* Heroicon name: mini/chevron-left */}
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="#" className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Next</span>
          {/* Heroicon name: mini/chevron-right */}
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>

  </div>

</div>


    );
}

export { TaskListFooter };