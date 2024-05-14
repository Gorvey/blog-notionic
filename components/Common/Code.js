/*
 * @Author: zengzhe
 * @Date: 2024-05-14 10:51:48
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-05-14 16:00:40
 * @Description: 
 */
import { Sandpack } from "@codesandbox/sandpack-react"
import { atomDark, aquaBlue } from '@codesandbox/sandpack-themes'
import { getTextContent } from 'notion-utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react"
import { Code } from 'react-notion-x/build/third-party/code'
const getCaptionData = (caption) => {
  caption = caption?.[0]?.[0] || ''
  // caption.replaceAll('/n', '').replaceAll(/”/g, '"').replaceAll(/“/g, '"')
  caption = caption.replace(/”/g, '"').replace(/“/g, '"');

  let result = ''
  try {
    result = JSON.parse(caption)
  } catch {
    result = undefined
  }
  console.log(caption, result)
  return result
}

const getCodeMetaData = (captionData, content) => {
  let vanilla = {
    files: {
      'index.js': content
    },
    options: { showConsole: false, showConsoleButton: true },
    template: 'vanilla',
  }
  if (!captionData) {
    return vanilla
  }
  let codeMaps = [
    {
      files: {
        'src/App.vue': content
      },
      template: 'vite-vue',
    },
    {
      files: {
        'App.js': content
      },
      template: 'react',
    }
  ]
  let defaultOption = {
    showReadOnly: true,
    initMode: "lazy",
    showConsole: false,
    showConsoleButton: true,
  }
  let currentCodeMap = codeMaps.find(v => v.template === captionData?.template)
  if (currentCodeMap) {
    return {

      ...currentCodeMap,
      ...captionData,
      options: {
        ...defaultOption,
        ...captionData.options
      }
    }
  } else {
    return {
      ...vanilla,
      template: 'vanilla',
      options: {
        ...defaultOption,
      },

    }
  }
}

export const SandPackCode = ({ block, defaultLanguage = 'typescript', className }) => {
  const { theme } = useTheme()
  const content = getTextContent(block.properties.title)
  const language = (
    block.properties?.language?.[0]?.[0] || defaultLanguage
  ).toLowerCase()
  const caption = block.properties.caption
  const captionData = getCaptionData(caption)
  let sandPackInfo = getCodeMetaData(captionData, content)



  return (
    <>
      {captionData ?
        <Sandpack
          className="w-full"
          theme={theme == 'dark' ? atomDark : aquaBlue}
          {...sandPackInfo}
        />
        : <><Code block={block} defaultLanguage={defaultLanguage} className={className} /></>}
    </>
  )
}