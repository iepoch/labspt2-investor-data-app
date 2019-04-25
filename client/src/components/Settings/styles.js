const styles = theme => ({
    parent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '55%',
        padding: '30px',
        margin: '20px auto',
        border: '1px solid #DCDCDC',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',
        [theme.breakpoints.down('xs')]: {
            border: '0',
            width: '90%',
            backgroundColor: '#FAFAFA'
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'no-wrap',
        flexDirection: 'column',
    },
    emailContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    phoneFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginBottom: theme.spacing.unit
    },
    currentPhoneContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    emailTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    header: {
        alignSelf: 'flex-start'
    },
    currentHeader: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    currentValue: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    textField: {
        marginTop: 0,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        width: 200,
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.primary.main
    },
    optSwitch: {
        margin: theme.spacing.unit,
    },
    divider: {
        width: '100%'
    },
    phoneField: {
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'column'
    }
});

export default styles;