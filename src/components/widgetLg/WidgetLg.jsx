import './widgetLg.css'

export default function WidgetLg() {
    const Button =({ type }) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzMyLFgpmd-CCsBktnr700nhTXcb-heB2SHXbB8-6w02-KDN1TaYoJBHt2TVigCSr83g&usqp=CAU" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Dec 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus"><Button type='Approved'/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzMyLFgpmd-CCsBktnr700nhTXcb-heB2SHXbB8-6w02-KDN1TaYoJBHt2TVigCSr83g&usqp=CAU" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Dec 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus"><Button type='Declined'/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzMyLFgpmd-CCsBktnr700nhTXcb-heB2SHXbB8-6w02-KDN1TaYoJBHt2TVigCSr83g&usqp=CAU" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Dec 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus"><Button type='Pending'/></td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzMyLFgpmd-CCsBktnr700nhTXcb-heB2SHXbB8-6w02-KDN1TaYoJBHt2TVigCSr83g&usqp=CAU" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Carol</span>
                </td>
                <td className="widgetLgDate">2 Dec 2021</td>
                <td className="widgetLgAmount">$122.00</td>
                <td className="widgetLgStatus"><Button type='Approved'/></td>
            </tr>
        </table>
        </div>
    )
}
