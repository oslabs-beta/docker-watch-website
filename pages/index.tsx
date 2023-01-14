// import Navigation from '../src/components/Navigation'
import Hero from '@/components/Hero'
import Head from 'next/head'
import Link from 'next/link'
import Highlight, { defaultProps } from 'prism-react-renderer'

const exampleCode = `
curl https://raw.githubusercontent.com/oslabs-beta/docker-watch-app/main/install.yaml | docker-compose -p dockerwatch -f - up -d
`

export default function Layout (): JSX.Element {
  return (
    <>
      <Head>
        <title>DockerWatch</title>
      </Head>
      <main>
        {/* <Hero /> */}
        <h2 className="text-4xl font-normal leading-normal mt-0 mb-2 text-sky-400">About</h2>
        <p>DockerWatch is a containerized application that collects and visualizes Docker container metrics over time.</p>
        <h2 id="installation" className="text-4xl font-normal leading-normal mt-0 mb-2 pt-8 text-sky-400">Installation</h2>
        <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 pt-4 text-sky-400">Prerequisites</h3>
        <ul>
          <li>Download <Link className="text-slate-100" href="https://www.docker.com/products/docker-desktop/">Docker Desktop</Link></li>
        </ul>
        <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 pt-4 text-sky-400">Setup</h3>
        <p>Run the following code in your terminal from the top level directory:</p>
        <Highlight {...defaultProps} code={exampleCode} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="text-sm overflow-scroll pl-4 pr-4" style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <h2 className="text-4xl font-normal leading-normal mt-0 mb-2 pt-8 text-sky-400">How to Use</h2>
        <ol>
          <li>After installing, open your web brower and visit <Link className="text-slate-100" href="http://localhost:8855">http://localhost:8855</Link></li>
        </ol>
        <h2 className="text-4xl font-normal leading-normal mt-0 mb-2 pt-8 text-sky-400">How It Works</h2>
        <p>The DockerWatch container holds four smaller containers: a web container, an api container, an InfluxDB database container, and a sensor container. The sensor collects data from the Docker daemon and stores it in the database. The API container queries for data from the database upon request from the web container. The CPU, Memory, Network, and Disk metrics for all containers in Docker Desktop, including DockerWatch, are monitored for as long as the DockerWatch container is running.</p>
        <h2 className="text-4xl font-normal leading-normal mt-0 mb-2 pt-8 text-sky-400">Authors</h2>
        <ul>
          <li>Brynn Sakell <Link className="text-slate-100" href="https://github.com/BrynnSakell">GitHub</Link> | <Link className="text-slate-100" href="https://linkedin.com/in/brynnsakell">LinkedIn</Link></li>
          <li>Dan Pietsch <Link className="text-slate-100" href="https://github.com/dpietsch14">GitHub</Link> | <Link className="text-slate-100" href="https://linkedin.com/in/danielpietsch14/">LinkedIn</Link></li>
          <li>Nadia Abowitz <Link className="text-slate-100" href="https://github.com/abowitzn">GitHub</Link> | <Link className="text-slate-100" href="https://linkedin.com/in/nadia-abowitz/">LinkedIn</Link></li>
          <li>Rob Mosher <Link className="text-slate-100" href="https://github.com/rob-mosher">GitHub</Link> | <Link className="text-slate-100" href="https://linkedin.com/in/rob-mosher-it/">LinkedIn</Link></li>
          <li>Stephen Rivas <Link className="text-slate-100" href="https://github.com/stephenpharmd">GitHub</Link> | <Link className="text-slate-100" href="https://linkedin.com/in/stephenpharmd/">LinkedIn</Link></li>
        </ul>
      </main>
    </>
  )
}
