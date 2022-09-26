import React, { useContext, useEffect, useState } from 'react';
import { courseWeeks } from '../../../utils/CourseWeeks';
import { useNavigate } from 'react-router-dom';
import { CurrentWeekContext } from '../../../contexts/platform/CurrentWeekStudyContext';
import { CurrentCourseContext } from '../../../contexts/platform/CurrentCourseContext';

const PlanCollapse = (props) => {

    let navigate = useNavigate();

    const [course, setCourse] = useState([]);
    const [expandCourse, setExpandCourse] = useState([]);
    const { deviceType, isSmart } = props;
    const { handleSelectCurrentWeek } = useContext(CurrentWeekContext);
    const { handleCourse } = useContext(CurrentCourseContext);

    useEffect(() => {
        const httprequest = () => {
            setCourse(courseWeeks);

            const toggleIndividualCourse = courseWeeks.map(item => {
                return { week: item.week, expand: false }
            })
            setExpandCourse(toggleIndividualCourse);
        }

        httprequest();
    }, []);

    const handleExpandCourse = (e, week) => {
        setExpandCourse((item) => {
            const newData = item.map(course => {
                if (course.week === week) {
                    return { ...course, week: course.week, expand: !course.expand }
                }
                return { ...course }
            })
            return newData;
        })
    }

    const navigateToCourse = (e, prop1, prop2) => {
        handleCourse({ course: prop1.title })
        handleSelectCurrentWeek({ week: prop2, class: prop1.title, days: prop1.days })
        navigate(`/u/planes/${props.routePlan.toLowerCase()}/contenido/${prop1.title.replaceAll(" ", "_")}`, { replace: false });
    }

    const daysLabel = (days) => {
        if (days > 1) return `${days} días`;
        return `${days} día`
    }

    const statusLabel = (status) => {
        let classLabel = "";

        switch (status.toLowerCase()) {
            case "completo":
                classLabel = "completed";
                break;
            case "incompleto":
                classLabel = "incomplete";
                break;
            default:
                classLabel = "no_advance";
                break;
        }

        return <span className={`regular-14 gray-textColor ${classLabel}`}>{status}</span>
    }

    return (
        <div className={`plan-course-container ${deviceType}`}>
            {
                course.map((courseItem, courseIndex) => {
                    return (
                        <div className='plan-course-week' key={courseIndex}>
                            <div className='pc-container' onClick={(e) => { handleExpandCourse(e, courseItem.week) }}>
                                <div className={`pc-head ${deviceType}`}>
                                    {
                                        isSmart ? (
                                            <>
                                                <div className="pc-head__header"> 
                                                    <i className={`material-icons toggle-expand-${expandCourse[courseIndex].expand ? "true" : "false"}`}>chevron_right</i>
                                                    <span className='regular-14 bold'>Semana {courseItem.week}</span>
                                                    <div className='pc-status'>
                                                        {statusLabel(courseItem.status)}
                                                    </div>
                                                </div>
                                                <div className='pc-head__body'>
                                                    <div className='pc-titles'>
                                                        {
                                                            courseItem.classes.map((_class, classIndex) => {
                                                                return (
                                                                    <div key={classIndex}>
                                                                        <span className='regular-14' >{_class.title} </span>
                                                                        <span className='regular-14 gray-textColor'>{daysLabel(_class.days)}</span>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <span className='regular-14'>{courseItem.simulator.title} {courseItem.simulator.days !== 0 ? <span>{courseItem.simulator.days} dias</span> : null}</span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div>
                                                    <i className={`material-icons absolute toggle-expand-${expandCourse[courseIndex].expand ? "true" : "false"}`}>chevron_right</i>
                                                    <span className='regular-14 bold'>Semana {courseItem.week}</span>
                                                    <div className='pc-titles'>
                                                        {
                                                            courseItem.classes.map((_class, classIndex) => {
                                                                return (
                                                                    <div key={classIndex}>
                                                                        <span className='regular-14' >{_class.title} </span>
                                                                        <span className='regular-14 gray-textColor'>{daysLabel(_class.days)}</span>
                                                                        |
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <span className='regular-14'>{courseItem.simulator.title} {courseItem.simulator.days !== 0 ? <span>{courseItem.simulator.days} dias</span> : null}</span>
                                                    </div>
                                                </div>
                                                <div className='pc-status'>
                                                    {statusLabel(courseItem.status)}
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                {
                                    expandCourse[courseIndex].expand && (
                                        <div className={`pc-body ${deviceType}`}>
                                            {
                                                courseItem.classes.map((_class, classIndex) => {
                                                    return (
                                                        <div className="pc-body-class-links" key={classIndex} onClick={(e) => { navigateToCourse(e, _class, courseItem) }}>
                                                            <span className='roboto-12 blue' >Ir a {_class.title}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PlanCollapse;