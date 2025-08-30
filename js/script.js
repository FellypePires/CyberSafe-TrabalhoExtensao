// Função para alternar a exibição do "Saiba Mais"
function toggleDetails(risk) {
    const details = document.getElementById(`${risk}-details`);
    const isVisible = details.style.display === 'block';

    // Ocultar todos os outros detalhes
    const allDetails = document.querySelectorAll('.details-content');
    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });

    // Mostrar ou ocultar o detalhe clicado
    details.style.display = isVisible ? 'none' : 'block';
}

// Função para enviar o problema e exibir a solução automaticamente
document.getElementById('problem-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const userName = document.getElementById('user-name').value || 'Anônimo';
    const problemDescription = document.getElementById('problem-description').value.toLowerCase();

    let response = '';

    // Respostas automáticas com base nas palavras-chave
    if (problemDescription.includes('senha') || problemDescription.includes('hackearam minha senha')) {
        response = 'Resposta: Se sua senha foi roubada, altere imediatamente sua senha em todos os serviços. Ative a autenticação de dois fatores (2FA) e verifique seus dispositivos para identificar possíveis malwares. Além disso, não compartilhe sua senha em sites não confiáveis.';
    } else if (problemDescription.includes('ransomware') || problemDescription.includes('computador bloqueado') || problemDescription.includes('ransomware vírus')) {
        response = 'Resposta: Não pague o resgate. Tente restaurar seus arquivos a partir de backups. Execute uma verificação completa com um antivírus confiável e considere desconectar o computador da internet. Para ataques mais avançados, consulte um especialista em segurança.';
    } else if (problemDescription.includes('phishing') || problemDescription.includes('email suspeito') || problemDescription.includes('link falso')) {
        response = 'Resposta: Verifique se o e-mail é confiável. Nunca clique em links de fontes desconhecidas ou forneça dados pessoais. Use um software de segurança que possa identificar e-mails de phishing e sempre confirme a autenticidade de solicitações antes de agir.';
    } else if (problemDescription.includes('ddos') || problemDescription.includes('ataque ddos') || problemDescription.includes('servidor indisponível')) {
        response = 'Resposta: Para proteger seu servidor contra ataques DDoS, utilize firewalls e outras ferramentas de mitigação, como proteção baseada em nuvem. Monitore o tráfego e configure alertas para detectar ataques em tempo real.';
    } else if (problemDescription.includes('rede') || problemDescription.includes('invasão de rede') || problemDescription.includes('acesso não autorizado')) {
        response = 'Resposta: Certifique-se de que sua rede está protegida com firewalls e criptografia de dados. Utilize senhas fortes e configure autenticação multifatorial em todos os dispositivos conectados à rede. Realize auditorias regulares para detectar qualquer acesso não autorizado.';
    } else if (problemDescription.includes('computador comprometido') || problemDescription.includes('dispositivo infectado') || problemDescription.includes('malware no computador')) {
        response = 'Resposta: Se o seu computador estiver comprometido, desconecte-o imediatamente da internet. Execute uma varredura completa com um antivírus confiável. Se o problema persistir, considere reinstalar o sistema operacional e restaurar seus dados a partir de backups seguros.';
    } else if (problemDescription.includes('vazamento de dados') || problemDescription.includes('dados expostos') || problemDescription.includes('informações vazadas')) {
        response = 'Resposta: Se você acredita que seus dados foram vazados, altere suas senhas imediatamente e ative a autenticação de dois fatores (2FA) onde possível. Verifique suas contas bancárias e de cartões de crédito em busca de atividades suspeitas e considere alertar as autoridades competentes.';
    } else if (problemDescription.includes('engenharia social') || problemDescription.includes('golpe de engenharia social') || problemDescription.includes('manipulação psicológica')) {
        response = 'Resposta: Ataques de engenharia social envolvem manipulação psicológica. Sempre questione solicitações inesperadas de informações pessoais e nunca compartilhe dados confidenciais sem verificar a identidade do solicitante. Considere alertar sua empresa ou as autoridades sobre tentativas de fraude.';
    } else {
        response = 'Resposta: Por favor, forneça mais detalhes sobre o seu problema para que possamos oferecer uma solução mais adequada. Seja específico sobre o tipo de ataque ou situação que está enfrentando.';
    }

    // Exibe a resposta na página
    document.getElementById('response-output').textContent = response;

    // Adiciona o problema ao Kanban automaticamente
    const newCard = document.createElement('div');
    newCard.classList.add('kanban-card');
    newCard.textContent = problemDescription;
    document.getElementById('todo').appendChild(newCard);

    // Limpar formulário após o envio
    document.getElementById('problem-form').reset();
});
