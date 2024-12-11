import React from "react";
import axios from "axios";

function Traffic() {
    return (
        <div style={styles.container}>
            <header style={{
                textAlign: 'center',
                marginBottom: '20px',
            }}>
                <h1>IoT 트래픽 모니터링</h1>
            </header>
            {/* {loading && <p>데이터를 불러오는 중...</p>}
            {error && <p style={styles.error}>{error}</p>} */}
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>IoT 번호</th>
                        <th style={styles.th}>IoT 상태</th>
                        <th style={styles.th}>IoT 위치 정보</th>
                        <th style={styles.th}>트래픽 정보</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>2</td>
                        <td style={styles.td}>ACTIVE</td>
                        <td style={styles.td}>Latitude: 37.566535, Longitude: 126.977969</td>
                        <td style={styles.td}>"inbound": 3000, "outbound": 2000</td>
                    </tr>
                </tbody>
            </table>
            <footer style={{
                textAlign: 'center',
                marginTop: '40px',
                color: '#888',
                }}>
                <img src='../ParkingLogo.png'></img>
                <p>
                    © 2024 가천대학교 P-실무프로젝트 무한이 주차비서 관리자 대시보드 <br />
                    Dev : Team SSHG
                </p>
        </footer>
        </div>
    );
}

const styles = {
    container: { padding: '20px', textAlign: 'center', backgroundColor: '#F9F9F9' },
    title: { marginBottom: '20px' },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '0 auto',
      maxWidth: '800px',
    },
    th: {
      border: '1px solid #FFF',
      padding: '8px',
      color: '#FFFFFF',
      backgroundColor: '#014f9e',
      fontWeight: 'bold',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'center',
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
    },
};

export default Traffic;