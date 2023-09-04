import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select'
import { Input } from "@/components/ui/input"

const imageOptions = [
  {
    id: 1,
    image: 'node:14',
    value: 'node:14',
  },
  {
    id: 2,
    image: 'node:14.16.0-alpine3.13',
    value: 'node:14.16.0-alpine3.13',
  },
  {
    id: 3,
    image: 'node:16',
    value: 'node:16',
  },
  {
    id: 4,
    image: 'node:16-alpine',
    value: 'node:16-alpine',
  },
  {
    id: 5,
    image: 'python:3.8',
    value: 'python:3.8',
  },
  {
    id: 6,
    image: 'ruby:2.7',
    value: 'ruby:2.7',
  },
  {
    id: 7,
    image: 'openjdk:11',
    value: 'openjdk:11',
  },
  {
    id: 8,
    image: 'alpine:3.13',
    value: 'alpine:3.13',
  },
  {
    id: 9,
    image: 'ubuntu:20.04',
    value: 'ubuntu:20.04',
  },
  {
    id: 10,
    image: 'centos:8',
    value: 'centos:8',
  },
  {
    id: 11,
    image: 'nginx:latest',
    value: 'nginx:latest',
  },
  // {
  //   id: 12,
  //   image: 'httpd:2.4',
  //   value: 'httpd:2.4',
  // },
  {
    id: 13,
    image: 'mysql:5.7',
    value: 'mysql:5.7',
  },
  {
    id: 14,
    image: 'postgres:13',
    value: 'postgres:13',
  },
  {
    id: 15,
    image: 'mongo:4.4',
    value: 'mongo:4.4',
  },
  {
    id: 16,
    image: 'redis:6',
    value: 'redis:6',
  },
  // {
  //   id: 17,
  //   image: 'docker.elastic.co/elasticsearch/elasticsearch:7.10.1',
  //   value: 'docker.elastic.co/elasticsearch/elasticsearch:7.10.1',
  // },
  {
    id: 18,
    image: 'php:7.4',
    value: 'php:7.4',
  },
  {
    id: 19,
    image: 'wordpress:5.7',
    value: 'wordpress:5.7',
  },
  // {
  //   id: 20,
  //   image: 'jenkins/jenkins:lts',
  //   value: 'jenkins/jenkins:lts',
  // },
  {
    id: 21,
    image: 'tomcat:9',
    value: 'tomcat:9',
  },
  // {
  //   id: 22,
  //   image: 'nginx:alpine',
  //   value: 'nginx:alpine',
  // },
  // {
  //   id: 23,
  //   image: 'doptopenjdk:11-jre-hotspot',
  //   value: 'doptopenjdk:11-jre-hotspot',
  // },
  {
    id: 24,
    image: 'mcr.microsoft.com/dotnet/aspnet:5.0',
    value: 'mcr.microsoft.com/dotnet/aspnet:5.0',
  },
  {
    id: 25,
    image: 'ruby:2.7-alpine',
    value: 'ruby:2.7-alpine',
  },
]
interface Props {
  step: number
  setStep: (value: number) => void
}

const BaseImageSelection = ({ step, setStep }: Props) => {
  return (
    <div className='space-y-1.5'>
      <h3 className='text-md font-medium'>Step 1: Base of the image</h3>
      <p className='text-sm text-muted-foreground'>
        Select the base image that will serve as the starting point for the Docker container.
      </p>
      <div className='py-6'>
				<Select

          onValueChange={value => {
            console.log(value)
          }}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a common base image' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Images</SelectLabel>
              {imageOptions.map(i => (
                <SelectItem
                  key={i.id}
                  value={i.value}
                >
                  {i.image}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
			<p className='text-sm text-muted-foreground'>
			or enter the one you want
			</p>
			<Input type="text" placeholder="Image" />
    </div>
  )
}

export default BaseImageSelection
