import Head from 'next/head';
import Axios from 'axios';
import styled from 'styled-components';

const Navbar = styled.nav`
  width: 100%;
  height: 60px;

  background-color: #eee;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > h1 {
    margin-left: 30px;
    text-transform: uppercase;
  }
`;

const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  position: relative;

  table,
  thead,
  tbody,
  th,
  tr,
  td {
    border: 1px solid black;
    padding: 10px 20px;
    border-collapse: collapse;
    text-align: center;
  }

  th {
    text-transform: uppercase;
  }

  td {
    text-transform: capitalize;
  }
`;

export default function Home({ events }: { events: any }) {
  return (
    <>
      <Head>
        <title>Hulchul App</title>
      </Head>
      <Navbar>
        <h1>Hulchul App</h1>
      </Navbar>
      <HomeWrapper>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Location</th>
              <th>Created By</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event: any, i: number) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td>{event.locationIdentifier}</td>
                <td>{event.createdBy}</td>
                <td>{event.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </HomeWrapper>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await Axios.get('http://localhost:3000/api/event');
  const events = data.data;

  return {
    props: {
      events,
    },
  };
}
