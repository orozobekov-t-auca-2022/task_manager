import React, { useEffect, useState } from "react"
import styles from './UndoButton.module.css'
import { useDispatch } from "react-redux"
import { undoRemoving } from "../../../components/Notes/model/noteSlice"

const UndoButton = React.forwardRef(
    function UndoButton(props, ref) {
        const {...rest} = props; 
        const dispatch = useDispatch();
        const [countDown, setCountDown] = useState(3);
        useEffect(() => {
            const timer = setInterval(() => {
                setCountDown(prev => {
                    if (prev <= 0) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }, []);
        return(
            <button className={styles.btn} onClick={() => dispatch(undoRemoving())} ref={ref} {...rest}>
                <span>
                    <svg className={styles.circle} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className={styles.bg} cx="14" cy="14" r="13" stroke="white" strokeWidth="2"/>
                        <circle className={styles.fg} cx="14" cy="14" r="13" stroke="white" strokeWidth="2"
                            style={{ strokeDashoffset: 81.64 * countDown / 3 }} />
                    </svg>
                    {countDown}
                </span>
                <div className={styles.undoText}>
                        UNDO
                    <svg style={{marginTop: '1px'}} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5.4394V11.4318C14.9993 12.1127 14.7236 12.7656 14.2333 13.247C13.743 13.7285 13.0782 13.9993 12.3848 14H7.15436V13.1439H12.3848C12.847 13.1433 13.29 12.9627 13.6168 12.6417C13.9437 12.3208 14.1276 11.8857 14.1283 11.4318V5.4394C14.1276 4.98553 13.9437 4.55044 13.6168 4.2295C13.29 3.90857 12.847 3.72796 12.3848 3.72728H1.66851L3.97513 5.99242L3.35881 6.59765L0 3.29925L3.35881 0L3.97513 0.605234L1.66851 2.87122H12.3848C13.0782 2.8719 13.743 3.1427 14.2333 3.62418C14.7236 4.10566 14.9993 4.75849 15 5.4394Z" fill="#F7F7F7"/>
                    </svg>
                </div>
            </button>
        )
    }
)

export default UndoButton;