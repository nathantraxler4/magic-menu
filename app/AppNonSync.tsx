import React from 'react'
import Menu from './screens/Menu'

import localImage from './assets/images/dinnerMenuBright.webp'

export const AppNonSync = () => {
    // const [showDone, setShowDone] = React.useState(false);
    // const tasks = useQuery(
    //   Task,
    //   collection =>
    //     showDone
    //       ? collection.sorted('createdAt')
    //       : collection.filtered('isComplete == false').sorted('createdAt'),
    //   [showDone],
    // );

    return (
    // <TaskManager tasks={tasks} setShowDone={setShowDone} showDone={showDone} />
        <Menu backgroundImage={localImage}/>
    )
}
