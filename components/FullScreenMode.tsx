import React, { useState } from 'react'

import { FullscreenOutlined, FullscreenExitOutlined } from '@mui/icons-material'

import IconButton from './IconButton'

import { enterFullScreen, exitFullScreen } from '../utils/FullScreenMode'

import { MuiVariants } from '../constants/colors'

const FullScreenMode = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

  const toggleFullScreen = () => {
    isFullScreen ? exitFullScreen() : enterFullScreen()
    setIsFullScreen(!isFullScreen)
  }

  return (
    <IconButton onClick={toggleFullScreen}>
      {isFullScreen ? (
        <FullscreenExitOutlined
          sx={{ fontSize: '32px', color: MuiVariants.NEUTRAL }}
        />
      ) : (
        <FullscreenOutlined
          sx={{ fontSize: '32px', color: MuiVariants.NEUTRAL }}
        />
      )}
    </IconButton>
  )
}

export default FullScreenMode
